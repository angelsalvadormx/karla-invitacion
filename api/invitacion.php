<?php
include_once('./response.php');

$file_path = './data/invitacion.json';
$method = $_SERVER['REQUEST_METHOD'];

header('Content-Type: application/json');

if (!file_exists($file_path)) {
    responseRequest(500, 'Data not found', true);
}

$json = file_get_contents($file_path);
$json_data = json_decode($json);


if ($method === "GET") {
    if (isset($_GET['token'])) {
        $token_user = $_GET['token'];
        $found = array_filter($json_data, function ($obj) use ($token_user) {
            return $token_user == $obj->token;
        })[0];
        echo json_encode($found == null ? (object) [] : $found);
        die();
    }
    die();
}

if ($method === "POST") {
    $body = json_decode(file_get_contents('php://input'));
    if ($body === null) {
        responseRequest(400, 'No se recibio el body', true);
    }
    $token = $body->token;
    $data = $body->data;

    if (!($token == md5($data->familia . $data->boletos))) {
        responseRequest(404, 'Token cambiado', true);
    }

    $found = array_filter($json_data, function ($obj) use ($token) {
        return $token == $obj->token;
    });

    if (count($found) > 0) {
        responseRequest(400, 'Invitado ya existe', true);
    }
    $saveData = new stdClass();
    $saveData->aceptado = false;
    $saveData->token = $token;
    $saveData->body = $data;

    $newJsonString = json_encode($json_data);
    file_put_contents($file_path, $newJsonString);
    responseRequest(200, 'Creado con éxito', true);
}

if ($method === "PUT") {
    $body = json_decode(file_get_contents('php://input'));
    if ($body === null) {
        responseRequest(400, 'No se recibio el body', true);
    }
    $token = $body->token;

    $found = false;
    foreach ($json_data as $obj){
        if($obj->token == $token){
            $obj->aceptado = true;
            $found = true;
        }
    }
    if ($found == false) {
        responseRequest(404, 'No existe ningun registro', true);
    }

    $newJsonString = json_encode($json_data);
    file_put_contents($file_path, $newJsonString);
    responseRequest(200, 'Aceptado con éxito', true);
}
