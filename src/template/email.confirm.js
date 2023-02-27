export const sendEmailConfirmTemplate = (data) => {
    let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap" rel="stylesheet">

    <style>
    body {
        padding: 4px;
        background-color: black;
    }
    .cuerpo{
        padding-top: 48px;
        max-width: 720px;
        min-width: 375;
        background-color: white;
        margin: auto;
        box-shadow: 0px 0px 2.5px rgba(66, 66, 66, 0.5);
    }
    /*seccion1*/
    
    .seccion1{
        padding-left: 48px;
        padding-right: 48px;
    }
    .imagen{
        padding-left: 40px;
        padding-right: 48px;
    }
    
    .logo {
        width: 120px;
    }
    .titulo_seccion1{
        color: #4E00BE;
        size: 28px;
        font: 600px;
        font-family: 'Poppins', sans-serif;
    }
    
    .texto{
        color: #2D2D2D;
        font-size: 14px;
        font: 400;
        font-family: 'Inter', sans-serif;
        text-align: justify;
    }
    .text1{
        padding-top: 10px;
    }
    .sub1{
        padding-top: 1px;
    }
    a:link {
        font-size: 14;
        font: 400;
        color: #4E00BE;
    
    }
    
    /*fin seccion 2*/
    
    /*seccion2*/
    .seccion2{
        padding-left: 48px;
        padding-right: 48px;
    }
    .subtitulo{
        font-family: 'Poppins', sans-serif;
        font-size: 18px ;
        font: 700;
    }
    
    .codigo{
        width: 256px;
        margin: auto;
        background-color: #F0EEEE;
    }
    .code{
        font-family: 'Poppins', sans-serif;
        font-size: 32px ;
        font: 700;
        color: #2D2D2D;
        text-align: center;
        padding-top: 10px;
    }
    
    /*finseccion2*/
    
    /*seccion3*/
    
    .seccion3{
        padding-left: 48px;
        padding-right: 48px;
    }
    .subtitulo3{
        font-family: 'Poppins', sans-serif;
        font-size: 18px ;
        font: 700;
        padding-top: 32px;
    }
    /*fin seccion3*/
    
    /*footer*/
    
    .seccion4{
        background-color: #2D2D2D;
        margin-top: 48px;
    }
    .footer{
        color: white;
        text-align: justify;
        font-size: 14px;
        font: 400;
        font-family: 'Inter', sans-serif;
        padding-left: 48px;
        padding-right: 48px;
        padding-top: 24px;
    }
    
    .iconos{
        display: flex;
        justify-items: center;
        gap: 16px;
        margin: auto;
        width: 184px;
        padding-top: 56px;
        padding-bottom: 64px;
    }

    .imgs {
        padding-right: 16px;
    }
    /*fin footer*/
    
    </style>
</head>
<body>
    <div class="cuerpo ">
        <div class="imagen">
            <img class="logo" src="cid:logo">
        </div>
        <div class="seccion1">
            <h1 class="titulo_seccion1"> Hi! ${data.tipoEnvio.datos.nombre}</h1>
        </div>
        <div class="seccion2">
            <p class="subtitulo text1">Su compra fue realizado con éxito y el costo total es de:</p>
            <div class="codigo">
                <h2 class="code">$/${data.total}.00</h2>
            </div>
            <p class="texto text1">
                El tipo de pago es ${tipoPago}
            </p>
            <p class="texto text1">
                Los productos comprados son:
            </p>
            <p class="texto text1">
                Los productos comprados son:
            </p>
            <p class="texto text1">
                Copy the code and enter it on the recovery page to recover your password. 
                Remember that the code will only be valid for 10 minutes.
            </p>
        </div>
       
        <div class="seccion4">
            <p class="footer">
                Este correo electrónico se genera automáticamente.
                Así que no tienes que responder a este correo electrónico,
                si necesitas algo puedes contactarnos.
            </p>
        </div>
    </div>
</body>
</html>
`
    return template
}
