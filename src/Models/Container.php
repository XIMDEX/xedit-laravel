<?php

namespace Xedit\Models;


use Illuminate\Database\Eloquent\Model;
use Xedit\Base\Interfaces\Models\IXeditContainer;
use Xedit\Base\Interfaces\Models\IXeditLayout;

class Container extends Model implements IXeditContainer
{
    public $timestamps = false;

    protected $fillable = [
        'layout_id',
        'content',
        'slug'
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'xedit_container';

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->getLayout()->getTitle();
    }


    public function getContent(): string
    {
        return $this->content;
    }

    /********************************* Relations *********************************/

    public function getLayout(): IXeditLayout
    {
        return Layout::find($this->layout_id);
    }

    public function getContainer($condition): IXeditContainer
    {
        return Container::where('slug', $condition)->first();
    }

}
