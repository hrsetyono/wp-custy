<?php

function blocksy_has_i18n_plugin() {
    if (function_exists('pll_the_languages')) {
        return true;
    }

    if (function_exists('icl_object_id')) {
        return true;
    }

    if (function_exists('weglot_get_current_language')) {
        return true;
    }

    return false;
}
