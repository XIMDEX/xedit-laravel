<?php

namespace Xedit\Models\Base;

use Xedit\Scopes\TypeScope;
use Illuminate\Database\Eloquent\Model;

abstract class Xedit extends Model
{
    protected $table = 'xedit';

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new TypeScope());
    }


    public function __construct(array $attributes = [])
    {
        $this->attributes['type'] = $this->type;
        parent::__construct($attributes);
    }

    public function setTitleAttribute($title)
    {
        $this->attributes['title'] = $title;
        $this->attributes['slug'] = str_slug("{$this->type}_{$title}");
    }

    public function __get($key)
    {
        if (strcmp($key, 'type') == 0) {
            return $this->getShortName();
        }
        return parent::__get($key);
    }

    public function getShortName()
    {
        return strtolower((new \ReflectionClass($this))->getShortName());
    }
}
