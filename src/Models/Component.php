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

    public static function getUniqueName(): string
    {
        return 'slug';
    }

    public function getContent(): string
    {
        return $this->content;
    }

    /** Methods */
    public static function get($attribute, $condition): IXeditComponent
    {
        return static::where($attribute, $condition)->first();
    }

    /********************************* Relations *********************************/
    public function getView(): IXeditView
    {
        $content = json_decode($this->getContent(), true);
        return View::get(View::getUniqueName(), $content['schema']['view']);
    }

}
