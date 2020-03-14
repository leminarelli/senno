import { datetimePickerChangeHandler, readURL } from '../main';
export const new_medal = (function () {

    var _medal = {};
    var _oldPoint = "green";
    var _newPoint = "";
    var _medalPoints = {};


    var _setListeners = function () {
    
        _medalPoints["green"] = [100, 200, 300];
        _medalPoints["yellow"] = [400, 500, 600, 700];
        _medalPoints["red"] = [800, 900, 1000];

        _medal.currentTarget.find(".green, .yellow, .red").unbind('click').bind("click", _updatePoints);

        _updateList("green");
    };
    var _medalSelect = function () {
        
        var $this = $(this)
        var currentId = $this.attr("id");
        _medal.currentTarget.find('.medal-type-list-item').removeClass('medal-selected');
        $this.addClass('medal-selected');
        
        var posX = _medal.currentTarget.find("#" + currentId)[0].offsetLeft;

        _medal.currentTarget.find(".border-medal").css("left", (posX) + "px")
        _medal.currentTarget.find(".input-pontos").val(currentId.replace("medal-", ""));
    };

    var _updateList = function (_new) {

        var currentPoint = _medalPoints[_new];

        $(".medal").unbind('click').bind("click", _medalSelect);

        let $this = _medal.currentTarget.find("#medal-" + currentPoint[0]);
        let _selectedMedals = _medal.currentTarget.find('.medal-type-list-item.medal-selected');
        let _existsSelectedMedal = _selectedMedals.length > 0;
        _selectedMedals.removeClass('medal-selected');
        if(_existsSelectedMedal) {
            $this = window.$(_selectedMedals.get(0));
        }
        $this.addClass('medal-selected');
        _medal.currentTarget.find(".input-pontos").val($this.data('value'));
    };

    var _updatePoints = function (e) {
        var $target = $(e.target);
        
        // Só aceita o clique no titulo ou na regiao da medalha
        if(!$target.hasClass('medal-points-item') && !$target.hasClass('title')) return;
        if (_oldPoint != "") _medal.currentTarget.find("#bt-" + _oldPoint).removeClass("expanded").addClass("retract");

        switch ($(this).attr("id")) {
            case "bt-green":
                _newPoint = "green";
                break;
            case "bt-yellow":
                _newPoint = "yellow";
                break;
            case "bt-red":
                _newPoint = "red";
                break;

        }

        _updateList(_newPoint);
        if (_newPoint != "") _medal.currentTarget.find("#bt-" + _newPoint).removeClass("retract").addClass("expanded");
        _oldPoint = _newPoint;
    };


    _medal.init = function (selectorOrElement) {
        _medal.currentTarget = $(selectorOrElement || '#modal_nova_medalha');
        if(_medal.currentTarget.length < 1) {
            return;
        }
        _setListeners();
    };

    return _medal;

})();


// Coloca active no link clicado
function setActiveOnClick(_id, _linkSelector, _listItemSelector) {
    var _el = document.getElementById(_id);
    if(!_el) return;
    Array.from(document.getElementById(_id).querySelectorAll(_linkSelector)).forEach(function(el){
        el.onclick = function(){
            Array.from(document.getElementById(_id).querySelectorAll(_listItemSelector)).forEach(function(el){
                el.classList.remove('active');
            })
            el.parentElement.classList.add('active');
        };
    })
}



//MODULES



export function setModuleButton(selectorOrElement) {
    $(selectorOrElement || "[data-module='button']").each(function(i, el){
        if(el.attributes.getNamedItem('data-url')) {
            el.onclick = function() {
                window.location.href = el.attributes.getNamedItem('data-url').value;
            };
            el.style.cursor="pointer";
        }
    })
}

export function setModulePopover(selectorOrElement) {
    let $el = $(selectorOrElement || '[data-toggle="popover"]');
    // Previne scrollar para o topo
    $el.each((i, el) => {
        let $el_ = $(el);
        if($el_.is('a')) {
            $el_.on('click',function(e) {e.preventDefault(); return true;});
        }
        $el_.data('template', $el_.get(0).dataset.template);
        $el_.popover('dispose').popover({html: true, delay: 200, content: $el_.data('template')});
    })
}

export function setModulePopoverHover(selectorOrElement) {
    let $el = $(selectorOrElement || '[data-toggle="popover"]');
    $(selectorOrElement || '[data-toggle="popover-hover"]').popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
    });
}

export function setModuleTooltip(selectorOrElement) {
    $(selectorOrElement || '[data-toggle="tooltip"]').data('bs.tooltip', null).tooltip({
        trigger : 'hover'
    });
}

export function setModuleDropdownCustom(selectorOrElement) {
    $(selectorOrElement || '[data-module="dropdown-custom"]').each(function(i, el){
        var $el = $(el);
        var $target = $($el.data('target')),
            $target_label = $($el.data('target-label'));
        
        $el.find('.dropdown-content .dropdown-item').unbind('click').click(function(_evt){
            _evt.preventDefault();
            var $this = $(this);
            $target.val($this.data('value')).trigger('change').trigger('keyup');
            $target_label.text($this.text())
        });
    });
}

export function setModuleDropdownFilter(selectorOrElement) {
    $(selectorOrElement || '[data-module="dropdown-filter"]').each(function(i, el){
        var $el = $(el);
        //console.log($el.closest('.bmd-form-group').css('padding-top'));
        
        $(el).closest('.input-group').css('margin-top',`calc(0px - ${$el.closest('.dropdown-menu').css('padding-top')}`);
        var $filter_container = $($el.data('filter-container-selector'));
        var filter_item_selector = $el.data('filter-item-selector');

        //console.log(`${el.id} - ${$el.data('filter-container-selector')}` );

        if($el.data('jets')) {
            $el.data('jets').destroy();
        }

        $el.data('jets', new Jets({
            searchTag: `#${el.id}`,
            contentTag: `${$el.data('filter-container-selector')} .dropdown-content`
        }));
    });
}

export function setModuleInputClear(selectorOrElement) {
    $(selectorOrElement || '[data-module="input-clear"]').each(function(i, el){
        var $el = $(el);
        var $input = $($el.data('input-selector'));
        
        $el.unbind('click').bind("click", function(_evt) {
            _evt.stopPropagation();
            _evt.preventDefault();
            $input.val('').trigger('change').trigger('keyup');
            // If jets is enabled
            $input.data('jets').search('');
        });
    })
}

export function setModuleInputFile() {
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
        var label	 = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            readURL(input);
            var fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
}

export function setModuleInputCharCount(selectorOrElement) {
    var $els = $(selectorOrElement || '[data-char-count]');

    $els.each(function(i, el){
        var $el = $(el);
        var characterLimit = $el.attr('maxlength');
        
        if(!characterLimit) {
            console.log(new Error('Not set'));
            return;
        }
        var $remainingCharsElement = $($el.data('char-count-selector'));
        
        if(!$remainingCharsElement || $remainingCharsElement.length < 1) {
            console.log(new Error('No remaining chars container found'));
            return;
        }

        var charactersUsed = $el.val().length;

        $remainingCharsElement.html(`${charactersUsed}/${characterLimit}`);
        $el.bind('keyup', function(){
            var charactersUsed = $(this).val().length;
            if(charactersUsed > characterLimit){
                charactersUsed = characterLimit;
                $(this).val($(this).val().substr(0, characterLimit));
                $(this).scrollTop($(this)[0].scrollHeight);
            }
            var charactersRemaining = characterLimit - charactersUsed;
            $remainingCharsElement.html(`${charactersUsed}/${characterLimit}`);
        });
    });
    
}

export function setModuleRedactor(selectorOrElement = undefined) {
    
    $(selectorOrElement || '[data-module="text-editor"]').each(function(i, el){
        var options = ['bold', 'italic', 'unorderedlist', 'orderedlist', 'formatting', 'link', 'file', 'image'];
        var options = ['html', 'formatting', 'bold', 'italic', 'deleted', 'underline', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'image', 'video', 'file', 'table', 'link', 'text', 'fontcolor', 'backcolor', 'alignment', 'alignleft', 'aligncenter', 'alignright', 'justify', 'horizontalrule'];
        var airButtons = ['formatting', 'bold', 'italic', 'deleted', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'fontcolor', 'backcolor'];
        
        var $el = $(el);
        
        var restricted_options = $el.data("restricted");

        if (restricted_options) {
            restricted_options = restricted_options.split(",")
            options = $.grep(options, function (val, i) {
                return $.inArray(val, restricted_options) == -1;
            });

        }
        
        
        $el.redactor({
            // air: true,
            // airButtons: airButtons,
            fixed: true,
            fixedBox: true,
            buttons: options,
            formatting: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            cleanup: false,
            imageUpload: '/media/upload',
            placeholder: $el.attr("placeholder"),
            // plugins: ['limiter','fontFamily'],
            limiter: 100,
            fontFamily: {
                defaultFont : 'Georgia',
                fonts: {
                    'Arial': 'Arial, Helvetica, sans-serif',
                    'Comic Sans MS': "'Comic Sans MS', cursive, sans-serif",
                    'Georgia': 'Georgia, serif',
                    'Times New Roman': "'Times New Roman', Times, serif"
                }
            }
        });
    });
}

export function setModuleFormWizard() {
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        let $wizard           = $("#msform");
        let $progressbar      = $('.progressbar');
        let $progressbarLower = $('#progressbar');

        if(document.location.hash != "") {
            $wizard.find('fieldset').removeClass('active').hide();
            next_fs = $wizard.find('fieldset[data-id=' + document.location.hash.replace('#','') + ']');
            next_fs.addClass('active').show();
            var index = $wizard.find('fieldset').index(next_fs);
            
            let $steps = $progressbar.find('li')
            let $stepsLower = $progressbarLower.find('li');
            $steps.removeClass('active').removeClass('current');
            $stepsLower.removeClass('active').removeClass('current');

            
            $steps.slice(0,index + 1).addClass('active');
            $stepsLower.slice(0,index + 1).addClass('active');

            $steps.eq(index).addClass('current');
            $stepsLower.eq(index).addClass('current');

        }

        $('.progressbar li .progressbar-link, #progressbar li .progressbar-link').unbind('click').click(function(e){
            if(animating) return false;

            current_fs = $wizard.find('fieldset.active');

            var index = $progressbar.find('.progressbar-link').index($(this));
            (index < 0 ? index = $progressbarLower.find('.progressbar-link').index($(this)) : void 0);
            if(index < 0) {
                return
            }
            next_fs = $wizard.find('fieldset').eq(index);
            if(next_fs.length < 0){
                return
            }

            // Last
            if(current_fs.get(0) === next_fs.get(0)) {
                return
            }

            var fsId = next_fs.data('id') || '';
            document.location.hash = fsId;

            animating = true;

            let stepIndex = 0;
            let $steps = $progressbar.find('li')
            let $stepsLower = $progressbarLower.find('li');
            $steps.removeClass('active').removeClass('current');
            $stepsLower.removeClass('active').removeClass('current');
            while(stepIndex <= index) {
                $steps.eq(stepIndex).addClass('active');
                $stepsLower.eq(stepIndex).addClass('active');
                stepIndex++;
            }
            $steps.eq(index).addClass('current');
            $stepsLower.eq(index).addClass('current');

            // Remove active
            current_fs.removeClass('active');
            next_fs.addClass('active');
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'transform': 'scale('+scale+')'});
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                    $wizard.find('fieldset').css({'transform': 'scale(1)'});
                    $wizard.find('fieldset').find('input').each((i, el) => el.dispatchEvent(new Event("resize")));
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".next").unbind('click').click(function(){
            if(animating) return false;
            
            current_fs = $(this).closest('fieldset.active');
            next_fs = current_fs.next('fieldset');

            if(next_fs.length < 1) {
                return;
            }

            var fsId = next_fs.data('id') || '';
            document.location.hash = fsId;

            animating = true;
            
            //activate next step on progressbar using the index of next_fs
            var index = $("fieldset").index(next_fs)
            // Remove Current from previous step
            index > 0 ? $("#progressbar li").eq(index - 1).removeClass('current') : void 0;
            index > 0 ? $(".progressbar li").eq(index - 1).removeClass('current') : void 0;
            // Active next steps
            $("#progressbar li").eq(index).addClass("active").addClass('current');
            $(".progressbar li").eq(index).addClass("active").addClass('current');
            
            // Remove active
            current_fs.removeClass('active');
            next_fs.addClass('active');
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'transform': 'scale('+scale+')'});
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                    $wizard.find('fieldset').css({'transform': 'scale(1)'});
                    $wizard.find('fieldset').find('input').each((i, el) => el.dispatchEvent(new Event("resize")));
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".previous").unbind('click').click(function(e){
            if(animating) return false;
            
            current_fs = $(this).closest('fieldset.active');
            previous_fs = current_fs.prev('fieldset');

            if(previous_fs.length < 1) {
                return;
            }

            var fsId = previous_fs.data('id') || '';
            document.location.hash = fsId;

            animating = true;
            
            //de-activate current step on progressbar
            var index = $("fieldset").index(current_fs);
            $("#progressbar li").eq(index).removeClass("active").removeClass('current');
            $(".progressbar li").eq(index).removeClass("active").removeClass('current');
            // Add Current to previous step
            index > 0 ? $("#progressbar li").eq(index - 1).addClass('current') : void 0;
            index > 0 ? $(".progressbar li").eq(index - 1).addClass('current') : void 0;
            
            // Remove active
            current_fs.removeClass('active');
            previous_fs.addClass('active');
            //show the previous fieldset
            previous_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                    $wizard.find('fieldset').css({'transform': 'scale(1)'});
                    $wizard.find('fieldset').find('input').each((i, el) => el.dispatchEvent(new Event("resize")));
                }, 
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        // $(".submit").unbind('click').click(function(){
        //     return false;
        // })
    }

export function setModuleChips(selectorOrElement) {
    $.getJSON('/api/tags', function(response) {
        let existingTags = {};
        response.data.tags.forEach(function(tag){
            existingTags[tag.nome] = null;
        });
        $(selectorOrElement || '.chips-autocomplete').each(function(index, chip_autocomplete) {
            let $chip_autocomplete = $(chip_autocomplete);
            let initial_tags = $chip_autocomplete.data('initial-tags');

            if(!Array.isArray(initial_tags)) {
                console.log(new Error("Initial tags aren't valid Array object"))
                return 
            }

            var updateTags = function(e) {
                e.parent().find('[name="tags"]').remove();
                e.find('.chip').each(function(index, chip){
                    // Caso os objetos estejam trocados por causa da implementação do método each
                    if(typeof chip === 'number') {
                        var aux = chip;
                        chip = index;
                        index = aux;
                    }
                    e.parent().find('.inputs').append(`<input type='hidden' name='tags' value='${chip.firstChild.textContent}'/>`)
                    return null;
                })
                // console.log(JSON.stringify(e.find('.chip').map(function(chip){ return chip.firstChild.textContent })))
            }

            initial_tags = initial_tags.map(function(tag){ return ( !tag ? undefined : { "tag": unescape(tag) }) }).filter(function(tag){ return tag });

            $chip_autocomplete.chips({
                data: initial_tags,
                autocompleteOptions: {
                    data: existingTags,
                    limit: Infinity,
                    minLength: 1
                },
                onChipDelete: updateTags,
                onChipAdd: updateTags
            });
            updateTags($chip_autocomplete)
        });
    });
}

function setModuleDualList(selectorOrElement = undefined) {
    return;
    // $(selectorOrElement || '[data-module="dual-list"]').each(function(i, el){

    //     let $el = $(el);
        
    //     $el.on('click', '.list-group .list-group-item', function () {
    //         $(this).toggleClass('active');
    //     });

    //     $el.find('.list-arrows button').click(function (e) {
    //         e.preventDefault();
    //         var $button = $(this), actives = '';
    //         if ($button.hasClass('move-left')) {
    //             actives = $el.find('.list-right ul li.active');
    //             actives.clone().appendTo('.list-left ul');
    //             actives.remove();
    //         } else if ($button.hasClass('move-right')) {
    //             actives = $el.find('.list-left ul li.active');
    //             actives.clone().appendTo('.list-right ul');
    //             actives.remove();
    //         }
    //     });

    //     $el.find('.dual-list .selector').click(function (e) {
    //         e.preventDefault();
    //         var $checkBox = $(this);
    //         if (!$checkBox.hasClass('selected')) {
    //             $checkBox.addClass('selected').closest('.well').find('ul li:not(.active)').addClass('active');
    //             $checkBox.children('i').removeClass('fa-square').addClass('fa-check-square');
    //         } else {
    //             $checkBox.removeClass('selected').closest('.well').find('ul li.active').removeClass('active');
    //             $checkBox.children('i').removeClass('fa-check-square').addClass('fa-square');
    //         }
    //     });

    //     $el.find('[name="SearchDualList"]').keyup(function (e) {
    //         var code = e.keyCode || e.which;
    //         var $this = $(this);
    //         if (code == '9') return;
    //         if (code == '27') $this.val(null);
    //         var $rows = $this.closest('.dual-list').find('.list-group li');
    //         var val = $.trim($this.val()).replace(/ +/g, ' ').toLowerCase();
    //         $rows.show().filter(function () {
    //             var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
    //             return !~text.indexOf(val);
    //         }).hide();
    //     });
    // });
    // log('setModuleDualList');
}

export function setModuleTipBox(selectorOrElement) {
    $(selectorOrElement || '.tip-box').unbind('click').bind('click', function(t) {
        let $el = $(t.currentTarget);
        let $body = $el.find('.body');
        if($el.hasClass('open') || $body.hasClass('open')) {
            // $body.css('display','');
            $el.css({ top: '', left: ''});
            $el.removeClass('open');
            $body.removeClass('open');
        } else {
            // $body.css('display','block');
            $el.css($el.position());
            $el.addClass('open');
            $body.addClass('open');
        }
    });
}

export function setModuleDatetimePicker(selectorOrElement) {
    $(selectorOrElement || '[data-module="datetimepicker"]').each(function(i, el){
        var $el = $(el);
        $el.datetimepicker();
        $el.get(0).removeEventListener('dp.change', datetimePickerChangeHandler);
        $el.bind('dp.change', datetimePickerChangeHandler);
    })
}

export const RedactorTools = {
    html: 'html',
    video: 'video',
    image: 'image',
    table: 'table',
    link: 'link',
    link_insert: 'link_insert',
    unlink: 'unlink',
    formatting: 'formatting',
    paragraph: 'paragraph',
    quote: 'quote',
    code: 'code',
    header1: 'header1',
    header2: 'header2',
    header3: 'header3',
    header4: 'header4',
    bold: 'bold',
    italic: 'italic',
    fontcolor: 'fontcolor',
    backcolor: 'backcolor',
    unorderedlist: 'unorderedlist',
    orderedlist: 'orderedlist',
    outdent: 'outdent',
    indent: 'indent',
    cancel: 'cancel',
    insert: 'insert',
    save: 'save',
    _delete: '_delete',
    insert_table: 'insert_table',
    insert_row_above: 'insert_row_above',
    insert_row_below: 'insert_row_below',
    insert_column_left: 'insert_column_left',
    insert_column_right: 'insert_column_right',
    delete_column: 'delete_column',
    delete_row: 'delete_row',
    delete_table: 'delete_table',
    rows: 'rows',
    columns: 'columns',
    add_head: 'add_head',
    delete_head: 'delete_head',
    title: 'title',
    image_position: 'image_position',
    none: 'none',
    left: 'left',
    right: 'right',
    image_web_link: 'image_web_link',
    text: 'text',
    mailto: 'mailto',
    web: 'web',
    video_html_code: 'video_html_code',
    file: 'file',
    upload: 'upload',
    download: 'download',
    choose: 'choose',
    or_choose: 'or_choose',
    drop_file_here: 'drop_file_here',
    align_left: 'align_left',
    align_center: 'align_center',
    align_right: 'align_right',
    align_justify: 'align_justify',
    horizontalrule: 'horizontalrule',
    deleted: 'deleted',
    anchor: 'anchor',
    link_new_tab: 'link_new_tab',
    underline: 'underline',
    alignment: 'alignment',
    _all: 'html,video,image,table,link,link_insert,unlink,formatting,paragraph,quote,code,header1,header2,header3,header4,bold,italic,fontcolor,backcolor,unorderedlist,orderedlist,outdent,indent,cancel,insert,save,_delete,insert_table,insert_row_above,insert_row_below,insert_column_left,insert_column_right,delete_column,delete_row,delete_table,rows,columns,add_head,delete_head,title,image_position,none,left,right,image_web_link,text,mailto,web,video_html_code,file,upload,download,choose,or_choose,drop_file_here,align_left,align_center,align_right,align_justify,horizontalrule,deleted,anchor,link_new_tab,underline,alignment,justify,alignleft,aligncenter,alignright'
    , _resumo: ''
    , _descricao: ''
}

export function setModuleTabs() {
    // $('.nav-tabs li.nav-item').on('click', function (e) {
        // e.preventDefault();
        // $(this.parentElement).find('li.nav-item').removeClass('active').removeClass('show')
        // $(this).tab('show')
    // });
}


export function getExtensionByMimeType(mimetype) {

    let files = [];

    files['video/3gpp2']                                                               = '3g2';
    files['video/3gp']                                                                 = '3gp';
    files['video/3gpp']                                                                = '3gp';
    files['application/x-compressed']                                                  = '7zip';
    files['audio/x-acc']                                                               = 'aac';
    files['audio/ac3']                                                                 = 'ac3';
    files['application/postscript']                                                    = 'ai';
    files['audio/x-aiff']                                                              = 'aif';
    files['audio/aiff']                                                                = 'aif';
    files['audio/x-au']                                                                = 'au';
    files['video/x-msvideo']                                                           = 'avi';
    files['video/msvideo']                                                             = 'avi';
    files['video/avi']                                                                 = 'avi';
    files['application/x-troff-msvideo']                                               = 'avi';            
    files['image/bmp']                                                                 = 'bmp';
    files['image/x-bmp']                                                               = 'bmp';
    files['image/x-bitmap']                                                            = 'bmp';
    files['image/x-xbitmap']                                                           = 'bmp';
    files['image/x-win-bitmap']                                                        = 'bmp';
    files['image/x-windows-bmp']                                                       = 'bmp';
    files['image/ms-bmp']                                                              = 'bmp';
    files['image/x-ms-bmp']                                                            = 'bmp';
    files['application/bmp']                                                           = 'bmp';
    files['application/x-bmp']                                                         = 'bmp';
    files['application/x-win-bitmap']                                                  = 'bmp';
    files['application/cdr']                                                           = 'cdr';
    files['application/coreldraw']                                                     = 'cdr';
    files['application/x-cdr']                                                         = 'cdr';
    files['application/x-coreldraw']                                                   = 'cdr';
    files['image/cdr']                                                                 = 'cdr';
    files['image/x-cdr']                                                               = 'cdr';
    files['zz-application/zz-winassoc-cdr']                                            = 'cdr';            
    files['text/x-comma-separated-values']                                             = 'csv';
    files['text/comma-separated-values']                                               = 'csv';
    files['application/vnd.msexcel']                                                   = 'csv';            
    files['application/vnd.openxmlformats-officedocument.wordprocessingml.document']   = 'docx';            
    files['video/x-f4v']                                                               = 'f4v';
    files['audio/x-flac']                                                              = 'flac';
    files['video/x-flv']                                                               = 'flv';
    files['image/gif']                                                                 = 'gif';            
    files['application/x-gtar']                                                        = 'gtar';
    files['application/x-gzip']                                                        = 'gzip';        
    files['text/html']                                                                 = 'html';            
    files['text/calendar']                                                             = 'ics';
    files['image/jpeg']                                                                = 'jpeg';
    files['image/pjpeg']                                                               = 'jpeg';
    files['application/x-javascript']                                                  = 'js';
    files['application/json']                                                          = 'json';
    files['text/json']                                                                 = 'json';
    files['audio/x-m4a']                                                               = 'm4a';
    files['application/vnd.mpegurl']                                                   = 'm4u';
    files['audio/midi']                                                                = 'mid';
    files['video/quicktime']                                                           = 'mov';
    files['audio/mpeg']                                                                = 'mp3';
    files['audio/mpg']                                                                 = 'mp3';
    files['audio/mpeg3']                                                               = 'mp3';
    files['audio/mp3']                                                                 = 'mp3';
    files['video/mp4']                                                                 = 'mp4';
    files['video/mpeg']                                                                = 'mpeg';
    files['audio/ogg']                                                                 = 'ogg';
    files['video/ogg']                                                                 = 'ogg';
    files['application/ogg']                                                           = 'ogg';            
    files['application/pdf']                                                           = 'pdf';
    files['application/octet-stream']                                                  = 'pdf';
    files['application/x-httpd-php-source']                                            = 'php';
    files['image/png']                                                                 = 'png';
    files['image/x-png']                                                               = 'png';
    files['application/powerpoint']                                                    = 'ppt';
    files['application/vnd.ms-powerpoint']                                             = 'ppt';
    files['application/vnd.ms-office']                                                 = 'ppt';
    files['application/msword']                                                        = 'ppt';
    files['application/vnd.openxmlformats-officedocument.presentationml.presentation'] = 'pptx';
    files['application/x-photoshop']                                                   = 'psd';
    files['image/vnd.adobe.photoshop']                                                 = 'psd';
    files['application/x-rar']                                                         = 'rar';
    files['application/rar']                                                           = 'rar';
    files['application/x-rar-compressed']                                              = 'rar';
    files['text/rtf']                                                                  = 'rtf';
    files['text/richtext']                                                             = 'rtx';
    files['image/svg+xml']                                                             = 'svg';
    files['application/x-shockwave-flash']                                             = 'swf';
    files['application/x-tar']                                                         = 'tar';
    files['application/x-gzip-compressed']                                             = 'tgz';
    files['image/tiff']                                                                = 'tiff';
    files['text/plain']                                                                = 'txt';
    files['audio/x-wav']                                                               = 'wav';
    files['audio/wave']                                                                = 'wav';
    files['audio/wav']                                                                 = 'wav';
    files['audio/x-ms-wma']                                                            = 'wma';
    files['video/x-ms-wmv']                                                            = 'wmv';
    files['video/x-ms-asf']                                                            = 'wmv';
    files['application/excel']                                                         = 'xl';
    files['application/msexcel']                                                       = 'xls';
    files['application/x-msexcel']                                                     = 'xls';
    files['application/x-ms-excel']                                                    = 'xls';
    files['application/x-excel']                                                       = 'xls';
    files['application/x-dos_ms_excel']                                                = 'xls';
    files['application/xls']                                                           = 'xls';
    files['application/x-xls']                                                         = 'xls';
    files['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']         = 'xlsx';
    files['application/vnd.ms-excel']                                                  = 'xlsx';
    files['application/xml']                                                           = 'xml';
    files['text/xml']                                                                  = 'xml';
    files['text/xsl']                                                                  = 'xsl';
    files['application/x-zip']                                                         = 'zip';
    files['application/zip']                                                           = 'zip';
    files['application/x-zip-compressed']                                              = 'zip';
    files['application/s-compressed']                                                  = 'zip';
    files['multipart/x-zip']                                                           = 'zip';

    //google
    files['application/vnd.google-apps.document']                                      = 'doc';
    files['application/vnd.google-apps.kix']                                           = 'doc';
    files['application/vnd.google-apps.presentation']                                  = 'ppt';
    files['application/vnd.google-apps.spreadsheet']                                   = 'xls';
    files['application/vnd.google-apps.kix']                                           = 'doc';

    return files[mimetype];
}


export const initModules = function() {
    // // Modules
    setModuleButton();
    setModulePopover();
    setModulePopoverHover();
    setModuleTooltip();
    setModuleDropdownCustom();
    setModuleDropdownFilter();
    setModuleInputClear();
    setModuleInputFile();
    setModuleInputCharCount();
    setModuleRedactor();
    setModuleFormWizard ? setModuleFormWizard() : void 0
    // setModuleChips();
    setModuleDualList();
    setModuleTipBox();

    new_medal.init();

    // Config Tabs
    // $('.nav-tabs li.nav-item').on('click', function (e) {
        // e.preventDefault();
        // $(this.parentElement).find('li.nav-item').removeClass('active').removeClass('show')
        // $(this).tab('show')
    // });

    setActiveOnClick("navbarNavDropdown1",'.nav-link','.nav-item');
    setActiveOnClick("navbarNavDropdown2",'.nav-link','.nav-item');
    setActiveOnClick("sidebar",'a','li');
}

export const RichTextEditorButtons = {
    _all: ['source',
        '|',
        'bold',
        'strikethrough',
        'underline',
        'italic',
        '|',
        'superscript',
        'subscript',
        '|',
        'ul',
        'ol',
        '|',
        'outdent',
        'indent',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'image',
        'file',
        'video',
        'table',
        'link',
        '|',
        'align',
        'undo',
        'redo',
        '\n',
        'cut',
        'hr',
        'eraser',
        'copyformat',
        '|',
        'symbol',
        'fullsize',
        'selectall',
        'print',
        'about',
        'para']
    , _resumo: ['image', 'table', 'file', 'video', 'print']
}