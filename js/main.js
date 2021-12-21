(function($) {

    var defaultProfiles = {
        'current': 'Default Profile'
    };
    defaultProfiles[profilesKey] = {
        'Default Profile': {
            checklistData: {}
        }
    }
    var profiles = $.jStorage.get(profilesKey, defaultProfiles);

    jQuery(document).ready(function($) {

        $('ul li').each(function(index) {
            if ($(this).attr('data-id')) {
               addCheckbox(this);
            }
            if ($(this).attr('data-rosaireperleimmaculee')) {
                $(this).addClass($(this).attr('data-rosaireperleimmaculee'));
            }
            if ($(this).attr('data-rosairesmallbluewax')) {
                $(this).addClass($(this).attr('data-rosairesmallbluewax'));
            }
            if ($(this).attr('data-rosairemediumbluewax')) {
                $(this).addClass($(this).attr('data-rosairemediumbluewax'));
            }
            if ($(this).attr('data-data-rosairebigbluewax')) {
                $(this).addClass($(this).attr('data-data-rosairebigbluewax'));
            }
            if ($(this).attr('data-rosairesmallredwax')) {
                $(this).addClass($(this).attr('data-rosairesmallredwax'));
            }
            if ($(this).attr('data-rosairemediumredwax')) {
                $(this).addClass($(this).attr('data-rosairemediumredwax'));
            }
            if ($(this).attr('data-data-rosairebigredwax')) {
                $(this).addClass($(this).attr('data-data-rosairebigredwax'));
            }
            if ($(this).attr('data-rosairepetitorteilgres')) {
                $(this).addClass($(this).attr('data-rosairepetitorteilgres'));
            }
            if ($(this).attr('data-rosairegrosorteilgres')) {
                $(this).addClass($(this).attr('data-rosairegrosorteilgres'));
            }
            if ($(this).attr('data-quetekeyroom')) {
                $(this).addClass($(this).attr('data-quetekeyroom'));
            }
            if ($(this).attr('data_quetegobeletdorevide')) {
                $(this).addClass($(this).attr('data_quetegobeletdorevide'));
            }
            if ($(this).attr('data_quetesainteblessuredescrupule')) {
                $(this).addClass($(this).attr('data_quetesainteblessuredescrupule'));
            }
            if ($(this).attr('data-queteclehautescimes')) {
                $(this).addClass($(this).attr('data-queteclehautescimes'));
            }
            if ($(this).attr('data-quetescapulaireincomplet')) {
                $(this).addClass($(this).attr('data-quetescapulaireincomplet'));
            }
            if ($(this).attr('data-queteetoffelin')) {
                $(this).addClass($(this).attr('data-queteetoffelin'));
            }
            if ($(this).attr('data-quetedepouilletentudia')) {
                $(this).addClass($(this).attr('data-quetedepouilletentudia'));
            }
            if ($(this).attr('data-quetecheveuxtentudia')) {
                $(this).addClass($(this).attr('data-quetecheveuxtentudia'));
            }
            if ($(this).attr('data-data-squelettetentudia')) {
                $(this).addClass($(this).attr('data-data-squelettetentudia'));
            }
            if ($(this).attr('data-quetebouquetthym')) {
                $(this).addClass($(this).attr('data-quetebouquetthym'));
            }
            if ($(this).attr('data-queteencensail')) {
                $(this).addClass($(this).attr('data-queteencensail'));
            }
            if ($(this).attr('data-queteromarin')) {
                $(this).addClass($(this).attr('data-queteromarin'));
            }
            if ($(this).attr('data-quetegirofle')) {
                $(this).addClass($(this).attr('data-quetegirofle'));
            }
            if ($(this).attr('data-data-queteolive')) {
                $(this).addClass($(this).attr('data-data-queteolive'));
            }
            if ($(this).attr('data-data-queteailsuie')) {
                $(this).addClass($(this).attr('data-data-queteailsuie'));
            }
            if ($(this).attr('data-queteoeufdifformite')) {
                $(this).addClass($(this).attr('data-queteoeufdifformite'));
            }
            if ($(this).attr('data-queteoeufdifformiteeclot')) {
                $(this).addClass($(this).attr('data-queteoeufdifformiteeclot'));
            }
            if ($(this).attr('data-quetemaintranchee')) {
                $(this).addClass($(this).attr('data-quetemaintranchee'));
            }
            if ($(this).attr('data-quetemarquerefuge1')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge1'));
            }
            if ($(this).attr('data-quetemarquerefuge2')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge2'));
            }
            if ($(this).attr('data-quetemarquerefuge3')) {
                $(this).addClass($(this).attr('data-quetemarquerefuge3'));
            }
            if ($(this).attr('data-quetesangle')) {
                $(this).addClass($(this).attr('data-quetesangle'));
            }
            if ($(this).attr('data-quetegobeletdorevide')) {
                $(this).addClass($(this).attr('data-quetegobeletdorevide'));
            }
            if ($(this).attr('data-quetesainteblessuredescrupule')) {
                $(this).addClass($(this).attr('data-quetesainteblessuredescrupule'));
            }
            if ($(this).attr('data-rosaireolivegelee')) {
                $(this).addClass($(this).attr('data-rosaireolivegelee'));
            }
            if ($(this).attr('data-quetefleurssechees')) {
                $(this).addClass($(this).attr('data-quetefleurssechees'));
            }
            if ($(this).attr('data-queteclehautescime')) {
                $(this).addClass($(this).attr('data-queteclehautescime'));
            }
            if ($(this).attr('data-quetevoiledeuilnoir')) {
                $(this).addClass($(this).attr('data-quetevoiledeuilnoir'));
            }
            if ($(this).attr('data-queterubannuptial')) {
                $(this).addClass($(this).attr('data-queterubannuptial'));
            }
            if ($(this).attr('data-quetepiecesmetalfondu')) {
                $(this).addClass($(this).attr('data-quetepiecesmetalfondu'));
            }
            if ($(this).attr('data-quetesainteblessurecontrition')) {
                $(this).addClass($(this).attr('data-quetesainteblessurecontrition'));
            }
            if ($(this).attr('data-quetesainteblessureattrition')) {
                $(this).addClass($(this).attr('data-quetesainteblessureattrition'));
            }
            if ($(this).attr('data-quetechalice')) {
                $(this).addClass($(this).attr('data-quetechalice'));
            }
            if ($(this).attr('data-quetecleseculier')) {
                $(this).addClass($(this).attr('data-quetecleseculier'));
            }
            if ($(this).attr('data-quetecleinquisiteur')) {
                $(this).addClass($(this).attr('data-quetecleinquisiteur'));
            }
            if ($(this).attr('data-queteclescribe')) {
                $(this).addClass($(this).attr('data-queteclescribe'));
            }
            if ($(this).attr('data-quetesainteblessureabnegation')) {
                $(this).addClass($(this).attr('data-quetesainteblessureabnegation'));
            }
            if ($(this).attr('data-reliquesang')) {
                $(this).addClass($(this).attr('data-reliquesang'));
            }
            if ($(this).attr('data-reliquelangue')) {
                $(this).addClass($(this).attr('data-reliquelangue'));
            }
            if ($(this).attr('data-reliquelinceul')) {
                $(this).addClass($(this).attr('data-reliquelinceul'));
            }
            if ($(this).attr('data-reliquelinge')) {
                $(this).addClass($(this).attr('data-reliquelinge'));
            }
            if ($(this).attr('data-reliqueongle')) {
                $(this).addClass($(this).attr('data-reliqueongle'));
            }
            if ($(this).attr('data-reliquepoumon')) {
                $(this).addClass($(this).attr('data-reliquepoumon'));
            }
            if ($(this).attr('data-bosswarden')) {
                $(this).addClass($(this).attr('data-bosswarden'));
            }
            if ($(this).attr('data-bosscrisanta')) {
                $(this).addClass($(this).attr('data-bosscrisanta'));
            }
            if ($(this).attr('data-bosstenpiedad')) {
                $(this).addClass($(this).attr('data-bosstenpiedad'));
            }
            if ($(this).attr('data-bossnotredame')) {
                $(this).addClass($(this).attr('data-bossnotredame'));
            }
            if ($(this).attr('data-bosstresangustias')) {
                $(this).addClass($(this).attr('data-bosstresangustias'));
            }
            if ($(this).attr('data-bossesdras')) {
                $(this).addClass($(this).attr('data-bossesdras'));
            }
            if ($(this).attr('data-bossmelquiades')) {
                $(this).addClass($(this).attr('data-bossmelquiades'));
            }
            if ($(this).attr('data-data-bossisidora')) {
                $(this).addClass($(this).attr('data-data-bossisidora'));
            }
            if ($(this).attr('data-bossamanecidagoldenblades')) {
                $(this).addClass($(this).attr('data-bossamanecidagoldenblades'));
            }
            if ($(this).attr('data-bossamanecidachiselledsteel')) {
                $(this).addClass($(this).attr('data-bossamanecidachiselledsteel'));
            }
            if ($(this).attr('data-bossamanecidamoltenthorn')) {
                $(this).addClass($(this).attr('data-bossamanecidamoltenthorn'));
            }
            if ($(this).attr('data-bossamanecidabejeweledarrow')) {
                $(this).addClass($(this).attr('data-bossamanecidabejeweledarrow'));
            }
            if ($(this).attr('data-Bosssierpes')) {
                $(this).addClass($(this).attr('data-Bosssierpes'));
            }
            if ($(this).attr('data-bosslaudes')) {
                $(this).addClass($(this).attr('data-bosslaudes'));
            }
            if ($(this).attr('data-bossexposito')) {
                $(this).addClass($(this).attr('data-bossexposito'));
            }
            if ($(this).attr('data-bossquirce')) {
                $(this).addClass($(this).attr('data-bossquirce'));
            }
            if ($(this).attr('data-bossescribar')) {
                $(this).addClass($(this).attr('data-bossescribar'));
            }
            if ($(this).attr('data-challenge1')) {
                $(this).addClass($(this).attr('data-challenge1'));
            }
            if ($(this).attr('data-challenge2')) {
                $(this).addClass($(this).attr('data-challenge2'));
            }
            if ($(this).attr('data-challenge3')) {
                $(this).addClass($(this).attr('data-challenge3'));
            }
            if ($(this).attr('data-challenge4')) {
                $(this).addClass($(this).attr('data-challenge4'));
            }
            if ($(this).attr('data-challenge5')) {
                $(this).addClass($(this).attr('data-challenge5'));
            }
            if ($(this).attr('data-pnjjibrael1')) {
                $(this).addClass($(this).attr('data-pnjjibrael1'));
            }
            if ($(this).attr('data-pnjjibrael2')) {
                $(this).addClass($(this).attr('data-pnjjibrael2'));
            }
            if ($(this).attr('data-pnjjibrael3')) {
                $(this).addClass($(this).attr('data-pnjjibrael3'));
            }
            if ($(this).attr('data-pnjjibrael4')) {
                $(this).addClass($(this).attr('data-pnjjibrael4'));
            }
            if ($(this).attr('data-pnjjibrael5')) {
                $(this).addClass($(this).attr('data-pnjjibrael5'));
            }
            if ($(this).attr('data-confession1')) {
                $(this).addClass($(this).attr('data-confession1'));
            }
            if ($(this).attr('data-confession2')) {
                $(this).addClass($(this).attr('data-confession2'));
            }
            if ($(this).attr('data-confession3')) {
                $(this).addClass($(this).attr('data-confession3'));
            }
            if ($(this).attr('data-confession4')) {
                $(this).addClass($(this).attr('data-confession4'));
            }
            if ($(this).attr('data-confession5')) {
                $(this).addClass($(this).attr('data-confession5'));
            }
            if ($(this).attr('data-confession6')) {
                $(this).addClass($(this).attr('data-confession6'));
            }
        });

        populateProfiles();

        $('input[type="checkbox"]').click(function() {
            var id = $(this).attr('id');
            var isChecked = profiles[profilesKey][profiles.current].checklistData[id] = $(this).prop('checked');
            //_gaq.push(['_trackEvent', 'Checkbox', (isChecked ? 'Check' : 'Uncheck'), id]);
            $(this).parent().parent().find('li > label > input[type="checkbox"]').each(function() {
                var id = $(this).attr('id');
                profiles[profilesKey][profiles.current].checklistData[id] = isChecked;
                $(this).prop('checked', isChecked);
            });
            $.jStorage.set(profilesKey, profiles);
            
            if ($(this).parent().parent().attr('data-unlock')) {
                 dataUnlock($(this).parent().parent().attr('data-unlock'),isChecked);    
            }
            
            calculateTotals();
        });

        $('#profiles').change(function(event) {
            profiles.current = $(this).val();
            $.jStorage.set(profilesKey, profiles);
            populateChecklists();
            //_gaq.push(['_trackEvent', 'Profile', 'Change', profiles.current]);
        });

        $('#profileAdd').click(function() {
            $('#profileModalTitle').html('Add Profile');
            $('#profileModalName').val('');
            $('#profileModalAdd').show();
            $('#profileModalUpdate').hide();
            $('#profileModalDelete').hide();
            $('#profileModal').modal('show');
            //_gaq.push(['_trackEvent', 'Profile', 'Add']);
        });

        $('#profileEdit').click(function() {
            $('#profileModalTitle').html('Edit Profile');
            $('#profileModalName').val(profiles.current);
            $('#profileModalAdd').hide();
            $('#profileModalUpdate').show();
            if (canDelete()) {
                $('#profileModalDelete').show();
            } else {
                $('#profileModalDelete').hide();
            }
            $('#profileModal').modal('show');
            //_gaq.push(['_trackEvent', 'Profile', 'Edit', profiles.current]);
        });

        $('#profileModalAdd').click(function(event) {
            event.preventDefault();
            var profile = $.trim($('#profileModalName').val());
            if (profile.length > 0) {
                if (typeof profiles[profilesKey][profile] == 'undefined') {
                    profiles[profilesKey][profile] = { checklistData: {} };
                }
                profiles.current = profile;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
                populateChecklists();
            }
            $('#profileModal').modal('hide');
            //_gaq.push(['_trackEvent', 'Profile', 'Create', profile]);
        });

        $('#profileModalUpdate').click(function(event) {
            event.preventDefault();
            var newName = $.trim($('#profileModalName').val());
            if (newName.length > 0 && newName != profiles.current) {
                profiles[profilesKey][newName] = profiles[profilesKey][profiles.current];
                delete profiles[profilesKey][profiles.current];
                profiles.current = newName;
                $.jStorage.set(profilesKey, profiles);
                populateProfiles();
            }
            $('#profileModal').modal('hide');
            //_gaq.push(['_trackEvent', 'Profile', 'Update', profile]);
        });

        $('#profileModalDelete').click(function(event) {
            event.preventDefault();
            if (!canDelete()) {
                return;
            }
            if (!confirm('Are you sure?')) {
                return;
            }
            delete profiles[profilesKey][profiles.current];
            profiles.current = getFirstProfile();
            $.jStorage.set(profilesKey, profiles);
            populateProfiles();
            populateChecklists();
            $('#profileModal').modal('hide');
            //_gaq.push(['_trackEvent', 'Profile', 'Delete']);
        });

        $('#profileModalClose').click(function(event) {
            event.preventDefault();
            $('#profileModal').modal('hide');
            //_gaq.push(['_trackEvent', 'Profile', 'Close']);
        });

        calculateTotals();

    });

    function populateProfiles() {
        $('#profiles').empty();
        $.each(profiles[profilesKey], function(index, value) {
            $('#profiles').append($("<option></option>").attr('value', index).text(index));
        });
        $('#profiles').val(profiles.current);
    }

    function populateChecklists() {
        $('input[type="checkbox"]').prop('checked', false);
        $.each(profiles[profilesKey][profiles.current].checklistData, function(index, value) {
            $('#' + index).prop('checked', value);
        });
        calculateTotals();
    }

    function calculateTotals() {
        $('[id$="_overall_total"]').each(function(index) {
            var type = this.id.match(/(.*)_overall_total/)[1];
            var overallCount = 0, overallChecked = 0;
            $('[id^="' + type + '_totals_"]').each(function(index) {
                var regex = new RegExp(type + '_totals_(.*)');
                var i = parseInt(this.id.match(regex)[1]);
                var count = 0, checked = 0;
                for (var j = 1; ; j++) {
                    var checkbox = $('#' + type + '_' + i + '_' + j);
                    if (checkbox.length == 0) {
                        break;
                    }
                    count++;
                    overallCount++;
                    if (checkbox.prop('checked')) {
                        checked++;
                        overallChecked++;
                    }
                }
                if (checked == count) {
                    this.innerHTML = $('#' + type + '_nav_totals_' + i)[0].innerHTML = '[DONE]';
                    $(this).removeClass('in_progress').addClass('done');
                    $($('#' + type + '_nav_totals_' + i)[0]).removeClass('in_progress').addClass('done');
                } else {
                    this.innerHTML = $('#' + type + '_nav_totals_' + i)[0].innerHTML = '[' + checked + '/' + count + ']';
                    $(this).removeClass('done').addClass('in_progress');
                    $($('#' + type + '_nav_totals_' + i)[0]).removeClass('done').addClass('in_progress');
                }
            });
            if (overallChecked == overallCount) {
                this.innerHTML = '[DONE]';
                $(this).removeClass('in_progress').addClass('done');
            } else {
                this.innerHTML = '[' + overallChecked + '/' + overallCount + ']';
                $(this).removeClass('done').addClass('in_progress');
            }
        });
    }

    function addCheckbox(el) {
        var lines = $(el).html().split('\n');
        lines[0] = '<label class="checkbox"><input type="checkbox" id="' + $(el).attr('data-id') + '">' + lines[0] + '</label>';
        $(el).html(lines.join('\n'));
        if (profiles[profilesKey][profiles.current].checklistData[$(el).attr('data-id')] == true) {
            $('#' + $(el).attr('data-id')).prop('checked', true);
        }
    }

    function canDelete() {
        var count = 0;
        $.each(profiles[profilesKey], function(index, value) {
            count++;
        });
        return (count > 1);
    }

    function getFirstProfile() {
        for (var profile in profiles[profilesKey]) {
            return profile;
        }
    }
    
    function dataUnlock(dataUnlockValue,isChecked) {
        $("[ "+ dataUnlockValue + "]").each(function() {
            
            if(isChecked) {
                $(this).removeClass(dataUnlockValue);
            } else {
                $(this).addClass(dataUnlockValue);
            } 
        });
    }

})( jQuery );
