<?php

namespace Xedit\Models;

use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditView;

class View extends Xedit implements IXeditView
{

    public function getContent(): string
    {
        return $this->content;
    }

}