<?php

namespace Xedit\Http\Traits;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Xedit\Base\Core\Xedit;
use Xedit\Base\Models\RouterMapper;
use Illuminate\Http\Request;

trait XeditTrait
{

    public $xedit_model = null;

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function recovery(Request $request)
    {
        $type = $request->get('_action', null);
        if ($type != null) {
            $id = str_replace('/get', '', str_replace('xedit/', '', $type));
            $section = ($this->xedit_model)::get('id', $id);
            $result = Xedit::getContentByNode($section);
        } else {
            throw new NotFoundHttpException('Document not found');
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

        $container = ($this->xedit_model)::get('id', $id)->getContainer();
        $content = $data['nodes']["xe_{$container->getId()}"];
        $content = isset($content['content']) ? $content['content'] : '';

        try {
            $container->saveContent($content);
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
