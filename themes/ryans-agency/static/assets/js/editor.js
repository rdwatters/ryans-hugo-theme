(function() {
    var localKeys = ['publishdate', 'title', 'subtitle', 'description', 'image', 'author', 'tag1', 'tag2', 'tag3', 'comments', 'isdoc', 'weight', 'category'];
    for (var i = 0; i < localKeys.length; i++) {
        var localKey = localKeys[i],
            localVal = localStorage.getItem(localKey);
        if ((localVal !== null) && (localKey !== "isdoc")) {
            document.getElementById(localKey).value = localVal;
        }
        if (localStorage.getItem('slug')) {
            document.getElementById('slug').innerHTML = localStorage.getItem('slug');
        }
        if (localStorage.getItem('title')) {
            document.getElementById('file-title-wrapper').style.display = "inline-block";
        }
    }
    if (localStorage.getItem('isdoc') == 'true') {
        document.getElementById('doc').checked = true;
        itsADoc();
    } else if (localStorage.getItem('isdoc') == 'false') {
        document.getElementById('post').checked = true;
        itsAPost();
    }
    var todaysDate = document.querySelector('input#date');
    var allInputs = document.querySelectorAll('#create-new-page input,#create-new-page textarea');
    var now = new Date();
    var todayIso = now.toISOString().split('T')[0];
    for (var j = 0; j < allInputs.length; j++) {
        //for each input, check it is the maxLength attribute and span.character-count as the next element
        if (allInputs[j].maxLength != -1 && allInputs[j].nextElementSibling.className == "character-count") {
            //if both requirements are met, add countCharacters eventListener
            allInputs[j].addEventListener('keyup', countCharacters, false);
        }
    }
    //add the values of each input to local storage with a key:value pair of el#id : el.value
    for (var k = 0; k < allInputs.length; k++) {
        allInputs[k].addEventListener('keyup', addToLocal, false);
    }
    if (todaysDate) {
        todaysDate.value = todayIso;
    }
    localStorage.setItem('date', todayIso);
    $('#clear-all').on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var conf = confirm('Are you sure you want to clear all saved values and start with a blank page?');
        if (conf == true) {
            //iterate through local storage keys and reset their values to an empty string ('')
            localKeys.forEach(function(item) {
                localStorage.setItem(item, '');
            });
            //also remove content stored in simple mde key:value
            localStorage.setItem('smde_content', '');
            localStorage.setItem('slug', '');
            location.reload();
        } else {
            return;
        }
    });
    $('input[name=contenttype]').click(function() {
        if ($('input[name=contenttype]:checked').val() == "post") {
            itsAPost();
        } else if ($('input[name=contenttype]:checked').val() == "doc") {
            itsADoc();
        }
    });

    function itsAPost() {
        $('input#image').addClass('req');
        $('input#weight').removeClass('req');
        $('#image-div').css('display', 'inline-block');
        $('#weight-div').css('display', 'none');
        localStorage.setItem('isdoc', 'false');
    }

    function itsADoc() {
        $('input#image').removeClass('req');
        $('input#weight').addClass('req');
        $('#image-div').css('display', 'none');
        $('#weight-div').css('display', 'inline-block');
        localStorage.setItem('isdoc', 'true');
    }
})();

function countCharacters(evt) {
    var targEl = evt.target;
    var descLength = targEl.value.length,
        maxChars = targEl.maxLength,
        availChars = maxChars - descLength,
        cautionAmt = maxChars * .6,
        warnAmt = maxChars * .25,
        charCount = targEl.nextElementSibling;
    charCount.style.display = "block";
    if (availChars == maxChars) {
        charCount.innerHTML = "";
    } else {
        charCount.innerHTML = availChars + " characters left";
    }
    if (availChars < warnAmt) {
        charCount.style.color = "darkred";
    } else if (availChars < cautionAmt) {
        charCount.style.color = "#FFD700";
    } else {
        charCount.style.color = "";
    }
    targEl.addEventListener('blur', function() {
        this.nextElementSibling.style.display = "none";
    }, false);
}
//Add separate event listener for blur on publish date so that the value is added to local storage
document.getElementById('publishdate').addEventListener('blur', function() {
    //since the publish date is hooked to rome.js, wait for blur to set localStorage item
    var publishdate = this.value;
    localStorage.setItem('publishdate', publishdate);
});

//Add separate event listener for blur on image input to make sure that image file is urlized
document.getElementById('image').addEventListener('blur', function() {
    this.value = this.value.trim().toLowerCase().split(' ').join('-').toLowerCase().replace(/\-\-/, '');
    localStorage.setItem('image',this.value);
});
//make sure that the weight give has a minimum of 2 digits
document.querySelector('input#weight').addEventListener('blur',function(){
    var self = this;
    var value = this.value;
    if(value.toString().length < 2){
        value = "0" + value;
    }
    self.value = value;
    console.log(isNaN(value));
    localStorage.setItem('weight',value);
});

$('.selection').change(function() {
    var key = $(this).attr('id');
    var val = $(this).val();
    localStorage.setItem(key, val);
});

function addToLocal(evt) {
    var el = evt.target,
        key = el.id,
        value = el.value,
        slug = '';
    if (key == "title") {
        slug = value.replace(/[^\w\s]/gi, '').trim().toLowerCase().split(' ').join('-').toLowerCase().replace(/\-\-/, '');
        localStorage.setItem('slug', slug);
        document.getElementById('file-title-wrapper').style.display = "inline-block";
        document.getElementById('slug').innerHTML = slug;
    }
    localStorage.setItem(key, value);
}



//front matter generator for digital-documentation
$(function() {
    //adds datepicker/calendar to #pubDate
    rome(publishdate, {
        time: false
    });
    var content = new SimpleMDE({
        element: document.getElementById("content"),
        indentWithTabs: true,
        autosave: {
            enabled: true,
            uniqueId: "content",
            delay: 5000
        },
        renderingConfig: {
            codeSyntaxHighlighting: true
        },
        tabsize: 2
    });
    $('.content-textfield').on('click', 'a', function(evt) {
        if ((content.isPreviewActive() || content.isSideBySideActive()) && (!evt.target.classList.contains('fa'))) {
            evt.preventDefault();
            evt.stopPropagation();
            var href = $(this).attr('href');
            window.open(href);
        }
    });
    $('#download-file').on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var allReqFields = document.querySelectorAll('.req'),
            imageInput = document.querySelector('input#image'),
            publishDateValue = document.getElementById('publishdate').value.trim(),
            missingFields = [];
            console.log(publishDateValue);
        if ($('input[name=contenttype]:checked').val() == undefined) {
            missingFields.push("Content type");
        }
        if (imageInput.classList.contains('req') && !(/\.(gif|jpg|jpeg|svg|tiff|png)$/i).test(imageInput.value.trim())) {
            missingFields.push("Blog posts require an image with valid file extension (.jpg,.jpeg,.png,.gif,.svg)");
        }
        for (var i = 0; i < allReqFields.length; i++) {
            // console.log(allReqFields[i].value);
            if (!allReqFields[i].value) {
                missingFields.push(allReqFields[i].name);
            }
        }
        if (missingFields.length > 0) {
            var missList = '<ol class=\"missing-items\">';
            for (var i = 0; i < missingFields.length; i++) {
                missList += ('<li>' + missingFields[i] + '</li>');
            }
            missList += '</ol>';
            document.getElementById('missing-fields').innerHTML = missList;
            document.querySelector('.missing-fields-wrapper').classList.add('open-missing-list');
            return;
        }
        var fileName = document.getElementById('slug').textContent + '.md';
        var bodyContent = content.value();
        //put all localStorage variables into an object
        var fm = {
            title: '\"' + localStorage.getItem('title') + '\"\n',
            subtitle: localStorage.getItem('subtitle') + '\n',
            description: localStorage.getItem('description') + '\n',
            date: localStorage.getItem('date') + '\n',
            publishdate: localStorage.getItem('publishdate') + '\n',
            updated: localStorage.getItem('publishdate') + '\n',
            author: '[' + localStorage.getItem('author') + ']\n',
            image: localStorage.getItem('image') + '\n' || '\n',
            draft: localStorage.getItem('draft') ? localStorage.getItem('draft') : true,
            categories: localStorage.getItem('category'),
            tag1: localStorage.getItem('tag1') || '',
            tag2: localStorage.getItem('tag2') || '',
            tag3: localStorage.getItem('tag3') || '',
            isdoc: localStorage.getItem('isdoc') || false,
            removefromsearch: 'false\n',
            weightortoc: function() {
                if (this.isdoc == "true") {
                    this.image = "\n";
                    return 'weight: ' + localStorage.getItem('weight') + '\nshowchapter: false\n';
                } else {
                    return 'removetoc: false\n';
                }
            },
            comments: localStorage.getItem('comments') ? localStorage.getItem('comments') + '\n' : '\n',
            aliases: '[]',
            alltags: function() {
                var allObjTags = [this.tag1, this.tag2],
                    tags = [];
                for (var i = 0; i < allObjTags.length; i++) {
                    tags.push(allObjTags[i]);
                }
                this.tag3.split(',').forEach(function(item) {
                    tags.push(item.toLowerCase());
                });
                var finalTags = tags.filter(v => v != '');
                // console.log(finalTags);
                return finalTags;
            }
        }
        var md = '---\ntitle: ' + fm.title + 'subtitle: ' + fm.subtitle + 'description: ' + fm.description + fm.weightortoc() + 'image: ' + fm.image + 'date: ' + fm.date + 'publishdate: ' + fm.publishdate + 'updated: ' + fm.updated + 'authors: ' + fm.author + 'categories: [' + fm.categories + ']\n' + 'tags: [' + fm.alltags() + ']\ndraft: ' + fm.draft + '\nisdoc: ' + fm.isdoc + '\nremovefromsearch: ' + fm.removefromsearch + 'aliases:\n' + 'comments: ' + fm.comments + '---\n\n';
        var downloadFile = new Blob([md, bodyContent], { type: 'text/plain;charset=utf-8' });
        saveAs(downloadFile, fileName);
    });
});
//toggle modal for missing fields.
$('#close-missing').on('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    $(this).parent().removeClass('open-missing-list');
});
