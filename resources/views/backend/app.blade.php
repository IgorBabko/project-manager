<!DOCTYPE html>
<html lang="en">
    <head>
        <base href="/"/>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Project Manager</title>
        
        @include('backend.partials.styles')
    
    </head>
    <body>
    
        <app>
            @include('backend.partials.loading')
        </app>

        @include('backend.partials.scripts')
        
        @if (Config::get('app.debug'))
            <script type="text/javascript">
                document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
            </script>
        @endif
        
    </body>
</html>