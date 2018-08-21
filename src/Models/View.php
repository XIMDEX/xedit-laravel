<?php

namespace Xedit\Models;

use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditView;

class View extends Xedit implements IXeditView
{

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

    public static function get($attribute, $condition): IXeditView
    {
        return View::where($attribute, $condition)->first();
    }


}
