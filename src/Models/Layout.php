<?php

namespace Xedit\Models;

use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditComponent;
use Xedit\Base\Interfaces\Models\IXeditLayout;

class Layout extends Xedit implements IXeditLayout
{

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    /** Methods */
    public static function get($attribute, $condition)
    {
        return Layout::where($attribute, $condition)->first();
    }


    /********************************* Relations *********************************/
    public function getComponent($condition): IXeditComponent
    {
        return Component::get('title', $condition);
    }
}
