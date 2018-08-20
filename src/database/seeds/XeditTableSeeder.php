<?php

namespace Xedit\Seeder;

use Illuminate\Database\Seeder;
use Xedit\Models\View;
use Xedit\Models\Layout;
use Xedit\Models\Component;

class XeditTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Views
        $view = new View;
        $view->title = 'header';
        $view->content = '<header class="links"> <img src="' . asset('css/imgs/cabeceraLINKS.png') . '" alt=""> </header>';
        $view->save();

        $view1 = new View;
        $view1->title = 'body';
        $view1->content = '<div xe_section="body" class="body"></div>';
        $view1->save();

        $view2 = new View;
        $view2->title = 'footer';
        $view2->content = '<footer class="links"> <img src="' . asset('css/imgs/pieLINKS.png') . '" alt=""> </footer>';
        $view2->save();

        // Components
        $comp = new Component;
        $comp->title = 'header';
        $comp->content = '{"schema":{"type": "container", "options":{"styles": [], "tags": []}, "view": "header", "sections" :{}, "lang" :{"es": "Cabecera", "en": "Header"}}}';
        $comp->save();

        $comp1 = new Component;
        $comp1->title = 'footer';
        $comp1->content = '{"schema":{"type": "container", "options":{"styles": [], "tags": []}, "view": "footer", "sections" :{}, "lang" :{"es": "Pie", "en": "Footer"}}}';
        $comp1->save();

        $comp2 = new Component;
        $comp2->title = 'body';
        $comp2->content = '{"schema":{"type": "text", "options":{"styles": "all", "tags": "all"}, "view": "body", "sections":{}, "actions":{"children": []}, "lang":{"es": "Inicio", "en": "Home"}}}';
        $comp2->save();


        // Layouts
        $layout = new Layout();
        $layout->title = '_header';
        $layout->content = '{"css" : [], "js" : [], "template":[{"content":{"header":{}}}]}';
        $layout->save();

        $layout1 = new Layout();
        $layout1->title = '_footer';
        $layout1->content = '{"css" : [ ], "template":[{"content":{"footer":{}}}]}';
        $layout1->save();

        $layout1 = new Layout();
        $layout1->title = 'resource_link';
        $layout1->content = '{"css" : [ "' . asset('css/student-files.css') . '"], "metadata":[], "template": [{"_header":"_header"},{"content":{"body":{}}},{"_footer":"_footer"}]}';
        $layout1->save();
    }
}
