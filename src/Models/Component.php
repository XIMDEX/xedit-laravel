<?php

namespace Xedit\Models;

use Xedit\Base\Interfaces\Models\IXeditComponent;
use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditView;

class Component extends Xedit implements IXeditComponent
{

    public function getContent(): string
    {
        return $this->content;
    }

    /********************************* Relations *********************************/
    public function getView($condition): IXeditView
    {
        return View::where('title', $condition)->firstOrFail();
    }

}
