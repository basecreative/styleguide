(function(a){a.fn.checkedPolyfill=function(c){function b(){var f=a('<style type="text/css"> #checkedPolyfill-test:checked { margin-left: 123456px; display: none; } </style>}'),g=a('<input type="checkbox" checked id="checkedPolyfill-test" />'),e;a("head").append(f);a("body").append(g);if(g.css("margin-left")==="123456px"){e=true}else{e=false}f.remove();g.remove();return e}if(b()){return false}function d(f){var e=a('label[for="'+f.attr("id")+'"]');if(f.prop("checked")){f.addClass("checked");e.addClass("checked")}else{f.removeClass("checked");e.removeClass("checked")}return f}return this.each(function(){var e=a(this);if(e.prop("type")==="radio"){a('input[name="'+e.prop("name")+'"]').change(function(){d(e)})}else{if(e.prop("type")==="checkbox"){e.change(function(){d(e)})}}d(e)})}})(jQuery);