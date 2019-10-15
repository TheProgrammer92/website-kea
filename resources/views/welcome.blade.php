<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">


    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>HORLOGIZ</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">


        <link rel="stylesheet" href="{{asset('css/animate.css')}}">
        <link rel="stylesheet" href="{{asset('css/materialize.css')}}">

        <!-- Fonts -->

        <!-- Compiled and minified CSS -->

        <!-- Compiled and minified JavaScript -->




    </head>
    <body id="body">

        <div id="app">

            <App></App>
        </div>

        <script src="{{asset('js/app.js')}}"></script>

    </body>
</html>
