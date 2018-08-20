@php
    $id = isset($id) ? $id : '';
    $type = isset($type) ? $type : 'html';
    $params = "&nodeId={$id}&type={$type}"
@endphp
<iframe
        style="width: {{ config('xedit.iframe.width') }}; height: {{ config('xedit.iframe.height') }};"
        src="{{ config('xedit.source') }}?url={{ config('xedit.url_api') }}{{$params}}&token={{Auth::user()->api_token}}"
        frameborder="0"
></iframe>