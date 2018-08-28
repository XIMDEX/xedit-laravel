<?php

namespace Xedit\Http\Traits;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Xedit\Base\Core\Xedit;
use Xedit\Base\Models\DocumentMapper;
use Xedit\Base\Models\Mapper;
use Illuminate\Http\Request;

trait XeditTrait
{

    protected $xedit_model = null;
    protected $router = null;
    protected $data = null;

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
    */
    public function mapper(Request $request, int $id)
    {
        $mapper = new Mapper(new DocumentMapper($id), $this->router, $this->data);

        return [
            'message' => '',
            'status' => 0,
            'response' => $mapper->toArray()
        ];
    }

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function recovery(Request $request, int $id)
    {
        $section = ($this->xedit_model)::get($id);
        $result = Xedit::getContentByNode($section);

        return [
            'message' => '',
            'status' => 0,
            'response' => [
                "nodes" => $result
            ]
        ];
    }

    /*
     * Display all documents
     * @param Request $request
     * @param int|null $type
     * @return \Illuminate\Http\JsonResponse
     */
    public function save(Request $request, int $id)
    {
        $data = $request->json()->all();

        $container = ($this->xedit_model)::get($id)->getContainer();
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
