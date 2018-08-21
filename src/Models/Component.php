<?php

namespace Xedit\Models;

use Xedit\Base\Interfaces\Models\IXeditComponent;
use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditView;

class Component extends Xedit implements IXeditComponent
{

    /** Attributes */
    public function getId()
    {
        return $this->id;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    /********************************* Relations *********************************/
    public function getView(): IXeditView
    {
        $content = json_decode($this->getContent(), true);
        $view = $content['schema']['view'];
        $slug = starts_with($view, 'view-') ? $view : str_slug("view-{$view}");
        return View::where('slug', $slug)->first();
    }

}
