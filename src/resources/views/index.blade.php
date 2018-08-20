@php
    $id = isset($id) ? $id : '';
    $type = isset($type) ? $type : 'html';
    $params = "&nodeId={$id}&type={$type}"
@endphp
<iframe
    style="width: {{ config('xedit.iframe.width') }}; height: {{ config('xedit.iframe.height') }};"
    src="{{ config('xedit.source') }}?url=http:%2F%2Funiverso.lh%2Fapi%2Fv1%2Fxedit{{$params}}&token=null"
    frameborder="0"
></iframe>