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

    public static function getUniqueName(): string
    {
        return 'slug';
    }

    public function getTitle(): string
    {
        return $this->getLayout()->getTitle();
    }


    public function getContent(): string
    {
        return $this->content;
    }

    /** Methods */
    public static function get($attribute, $condition): IXeditContainer
    {
        return Container::where($attribute, $condition)->first();
    }

    public function saveContent($content): bool
    {
        return $this->update(['content' => $content]);
    }

    /********************************* Relations *********************************/

    public function getLayout(): IXeditLayout
    {
        return Layout::get('id', $this->layout_id);
    }

    public function getContainer($condition): IXeditContainer
    {
        return Container::get(Container::getUniqueName(), $condition);
    }

}
