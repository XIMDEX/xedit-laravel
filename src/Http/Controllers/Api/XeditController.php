<?php

namespace Xedit\Http\Controllers\Api;

use Xedit\Base\Core\Xedit;
use Xedit\Base\Models\RouterMapper;
use Xedit\Models\Container;
use Illuminate\Http\Request;
use App\Models\SectionStudentFile;
use Illuminate\Routing\Controller;

class XeditController extends Controller
{

    public $model = SectionStudentFile::class;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }


    protected function response($data, $error = null, $statusCode = 200)
    {
        return response()->json([
            'result' => $data,
            'error' => $error
        ], $statusCode);
    }

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
        $type = $request->get('_action', null);
        if ($type != null) {
            $id = str_replace('/get', '', str_replace('xedit/', '', $type));
            $section = ($this->model)::find($id);
            $result = Xedit::getContentByNode($section);
        } else {
            $result = 'Failed to get document';
        }
        $routerMapper = new RouterMapper('');
        $routerMapper->setSaveUrl('xedit/save&token=null&id=' . $id);

        return [
            'message' => '',
            'status' => 0,
            'response' => [
                'baseUrl' => '',
                'metas' => [],
                'nodes' => $result,
                'routerMapper' => $routerMapper->toArray()
            ]
        ];
    }

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(Request $request)
    {
        ['id' => $id] = $request->all();
        $data = $request->json()->all();

        $id = ($this->model)::find($id)->container_id;
        $content = $data['nodes']["xe_{$id}"];
        $content = isset($content['content']) ? $content['content'] : '';

        try {
            Container::where('id', $id)
                ->update(['content' => $content]);
            $result = [
                'message' => '',
                'response' => 'Saved',
                'status' => 0
            ];
        } catch (\Exception $e) {
            $result = [
                'message' => $e->getMessage(),
                'response' => 'Error',
                'status' => 0
            ];
        }

        return $result;
    }
}
