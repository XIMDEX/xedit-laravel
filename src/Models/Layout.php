<?php

namespace Xedit\Models;

use Xedit\Base\Interfaces\Models\IXeditContainer;
use Xedit\Models\Base\Xedit;
use Xedit\Base\Interfaces\Models\IXeditComponent;
use Xedit\Base\Interfaces\Models\IXeditLayout;

class Layout extends Xedit implements IXeditLayout
{

    public function getTitleAttribute()
    {
        $result = $this->attributes['title'];
        if (\Lang::has("xedit.layout.{$result}")) {
            $result = __("xedit.layout.{$result}");
        }

        return $result;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getContent(): string
    {
        return $this->content;
    }


    /********************************* Relations *********************************/
    public function getComponent($condition): IXeditComponent
    {
        $slug = starts_with($condition, 'component-') ? $condition : str_slug("component-{$condition}");
        return Component::where('slug', $slug)->first();
    }

    public function getIncludeContainer($condition): IXeditContainer
    {
        return Container::where('slug', $condition)->first();
    }
}
