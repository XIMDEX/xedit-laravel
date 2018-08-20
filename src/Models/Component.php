<?php

namespace Xedit\Models;

use Xedit\Base\Interfaces\Models\IXeditComponent;
use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditView;

class Component extends Xedit implements IXeditComponent
{

    /** Attributes */
    public function getContent(): string
    {
        return $this->content;
    }

    /** Methods */
    public static function get($attribute, $condition)
    {
        return static::where($attribute, $condition)->first();
    }

    /********************************* Relations *********************************/
    public function getView(): IXeditView
    {
        $content = json_decode($this->getContent(), true);
        return View::get('title', $content['schema']['view']);
    }

}
