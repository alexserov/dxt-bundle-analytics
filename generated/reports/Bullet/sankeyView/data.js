var data = [
    {
        source: null,
        weight: 45,
        target: "./generated/indices/Bullet.js"
    },
    {
        source: "./generated/indices/Bullet.js",
        weight: 320,
        target: "/viz/bullet.js"
    },
    {
        source: "/viz/bullet.js",
        weight: 8802,
        target: "/viz/sparklines/bullet.js"
    },
    {
        source: "/viz/sparklines/bullet.js",
        weight: 1326,
        target: "/core/utils/iterator.js"
    },
    {
        source: "/viz/sparklines/bullet.js",
        weight: 9214,
        target: "/viz/sparklines/base_sparkline.js"
    },
    {
        source: "/viz/sparklines/bullet.js",
        weight: 2000,
        target: "/core/component_registrator.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 2762,
        target: "/core/utils/type.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 2004,
        target: "/core/utils/extend.js"
    },
    {
        source: "/core/component_registrator.js",
        weight: 3435,
        target: "/core/errors.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 8931,
        target: "/core/utils/common.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 5627,
        target: "/core/dom_adapter.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 20806,
        target: "/events/core/events_engine.js"
    },
    {
        source: "/core/component_registrator.js",
        weight: 337,
        target: "/core/renderer.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 20324,
        target: "/viz/core/utils.js"
    },
    {
        source: "/core/component_registrator.js",
        weight: 1871,
        target: "/core/utils/public_component.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 6254,
        target: "/events/utils/index.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 1603,
        target: "/events/pointer.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 22550,
        target: "/viz/core/base_widget.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 25551,
        target: "/viz/translators/translator2d.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 17194,
        target: "/viz/core/tooltip.js"
    },
    {
        source: "/viz/sparklines/base_sparkline.js",
        weight: 23705,
        target: "/viz/core/export.js"
    },
    {
        source: "/core/component_registrator.js",
        weight: 376,
        target: "/core/component_registrator_callbacks.js"
    },
    {
        source: "/events/core/events_engine.js",
        weight: 2732,
        target: "/core/utils/callbacks.js"
    },
    {
        source: "/core/component_registrator_callbacks.js",
        weight: 943,
        target: "/core/memorized_callbacks.js"
    },
    {
        source: "/events/core/events_engine.js",
        weight: 388,
        target: "/events/core/event_registrator_callbacks.js"
    },
    {
        source: "/viz/core/export.js",
        weight: 1011,
        target: "/core/utils/console.js"
    },
    {
        source: "/core/errors.js",
        weight: 2033,
        target: "/core/utils/error.js"
    },
    {
        source: "/core/dom_adapter.js",
        weight: 1610,
        target: "/core/utils/dependency_injector.js"
    },
    {
        source: "/core/utils/common.js",
        weight: 2151,
        target: "/core/config.js"
    },
    {
        source: "/core/utils/common.js",
        weight: 1210,
        target: "/core/guid.js"
    },
    {
        source: "/core/utils/common.js",
        weight: 5377,
        target: "/core/utils/deferred.js"
    },
    {
        source: "/core/utils/common.js",
        weight: 6134,
        target: "/core/utils/data.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 1634,
        target: "/core/utils/window.js"
    },
    {
        source: "/core/utils/public_component.js",
        weight: 1486,
        target: "/core/polyfills/weak_map.js"
    },
    {
        source: "/events/core/events_engine.js",
        weight: 869,
        target: "/events/core/hook_touch_props.js"
    },
    {
        source: "/events/core/events_engine.js",
        weight: 633,
        target: "/core/utils/call_once.js"
    },
    {
        source: "/core/utils/public_component.js",
        weight: 2926,
        target: "/core/element_data.js"
    },
    {
        source: "/viz/core/tooltip.js",
        weight: 2325,
        target: "/core/utils/inflector.js"
    },
    {
        source: "/core/renderer.js",
        weight: 25096,
        target: "/core/renderer_base.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 2235,
        target: "/core/utils/resize_callbacks.js"
    },
    {
        source: "/viz/core/utils.js",
        weight: 5383,
        target: "/core/utils/math.js"
    },
    {
        source: "/events/pointer.js",
        weight: 2253,
        target: "/core/utils/browser.js"
    },
    {
        source: "/viz/core/utils.js",
        weight: 20972,
        target: "/core/utils/date.js"
    },
    {
        source: "/viz/core/utils.js",
        weight: 13725,
        target: "/color.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 9873,
        target: "/core/devices.js"
    },
    {
        source: "/viz/core/export.js",
        weight: 9149,
        target: "/viz/themes.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 3768,
        target: "/viz/core/base_theme_manager.js"
    },
    {
        source: "/events/pointer.js",
        weight: 1277,
        target: "/events/core/event_registrator.js"
    },
    {
        source: "/core/utils/public_component.js",
        weight: 1034,
        target: "/core/remove_event.js"
    },
    {
        source: "/events/utils/index.js",
        weight: 768,
        target: "/events/utils/add_namespace.js"
    },
    {
        source: "/events/utils/index.js",
        weight: 1711,
        target: "/ui/widget/selectors.js"
    },
    {
        source: "/events/pointer.js",
        weight: 2984,
        target: "/core/utils/support.js"
    },
    {
        source: "/events/pointer.js",
        weight: 1976,
        target: "/events/pointer/touch.js"
    },
    {
        source: "/events/pointer.js",
        weight: 1550,
        target: "/events/pointer/mspointer.js"
    },
    {
        source: "/events/pointer.js",
        weight: 1555,
        target: "/events/pointer/mouse.js"
    },
    {
        source: "/events/pointer.js",
        weight: 2381,
        target: "/events/pointer/mouse_and_touch.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 14665,
        target: "/core/dom_component.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 6307,
        target: "/viz/core/helpers.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 2107,
        target: "/viz/core/errors_warnings.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 71281,
        target: "/viz/core/renderers/renderer.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 9237,
        target: "/viz/core/layout.js"
    },
    {
        source: "/viz/core/base_widget.js",
        weight: 2423,
        target: "/viz/core/base_widget.utils.js"
    },
    {
        source: "/viz/translators/translator2d.js",
        weight: 5374,
        target: "/viz/translators/range.js"
    },
    {
        source: "/viz/translators/translator2d.js",
        weight: 6689,
        target: "/viz/translators/category_translator.js"
    },
    {
        source: "/viz/translators/translator2d.js",
        weight: 4667,
        target: "/viz/translators/interval_translator.js"
    },
    {
        source: "/viz/translators/translator2d.js",
        weight: 556,
        target: "/viz/translators/datetime_translator.js"
    },
    {
        source: "/viz/translators/translator2d.js",
        weight: 1997,
        target: "/viz/translators/logarithmic_translator.js"
    },
    {
        source: "/viz/core/tooltip.js",
        weight: 8884,
        target: "/format_helper.js"
    },
    {
        source: "/viz/core/tooltip.js",
        weight: 18874,
        target: "/viz/core/plaque.js"
    },
    {
        source: "/viz/core/export.js",
        weight: 2238,
        target: "/exporter.js"
    },
    {
        source: "/viz/core/export.js",
        weight: 4095,
        target: "/localization/message.js"
    },
    {
        source: "/viz/core/export.js",
        weight: 2993,
        target: "/events/hover.js"
    },
    {
        source: "/core/utils/error.js",
        weight: 2780,
        target: "/core/utils/string.js"
    },
    {
        source: "/core/utils/error.js",
        weight: 287,
        target: "/core/version.js"
    },
    {
        source: "/core/utils/dependency_injector.js",
        weight: 4675,
        target: "/core/class.js"
    },
    {
        source: "/core/utils/data.js",
        weight: 815,
        target: "/core/utils/variable_wrapper.js"
    },
    {
        source: "/core/utils/data.js",
        weight: 2481,
        target: "/core/utils/object.js"
    },
    {
        source: "/viz/core/plaque.js",
        weight: 397,
        target: "./node_modules/@babel/runtime/helpers/esm/extends.js"
    },
    {
        source: "/core/dom_component.js",
        weight: 3954,
        target: "/core/utils/array.js"
    },
    {
        source: "/core/renderer_base.js",
        weight: 2799,
        target: "/core/utils/style.js"
    },
    {
        source: "/core/renderer_base.js",
        weight: 4415,
        target: "/core/utils/size.js"
    },
    {
        source: "/core/renderer_base.js",
        weight: 1883,
        target: "/core/utils/html_parser.js"
    },
    {
        source: "/core/utils/resize_callbacks.js",
        weight: 1247,
        target: "/core/utils/ready_callbacks.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 16994,
        target: "/viz/palette.js"
    },
    {
        source: "/core/devices.js",
        weight: 2244,
        target: "/core/events_strategy.js"
    },
    {
        source: "/core/devices.js",
        weight: 576,
        target: "/core/utils/storage.js"
    },
    {
        source: "/core/devices.js",
        weight: 1120,
        target: "/core/utils/view_port.js"
    },
    {
        source: "/viz/themes.js",
        weight: 11530,
        target: "/ui/themes.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 47883,
        target: "/viz/core/themes/generic.light.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 6567,
        target: "/viz/core/themes/generic.dark.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 8294,
        target: "/viz/core/themes/generic.contrast.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 3608,
        target: "/viz/core/themes/generic.carmine.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 4514,
        target: "/viz/core/themes/generic.darkmoon.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 3614,
        target: "/viz/core/themes/generic.softblue.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 4124,
        target: "/viz/core/themes/generic.darkviolet.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 3855,
        target: "/viz/core/themes/generic.greenmist.js"
    },
    {
        source: "/viz/core/base_theme_manager.js",
        weight: 11434,
        target: "/viz/core/themes/material.js"
    },
    {
        source: "/core/dom_component.js",
        weight: 11432,
        target: "/core/component.js"
    },
    {
        source: "/core/dom_component.js",
        weight: 6475,
        target: "/core/template_manager.js"
    },
    {
        source: "/core/dom_component.js",
        weight: 498,
        target: "/core/element.js"
    },
    {
        source: "/events/pointer/touch.js",
        weight: 3184,
        target: "/events/pointer/base.js"
    },
    {
        source: "/events/pointer/mspointer.js",
        weight: 1887,
        target: "/events/pointer/observer.js"
    },
    {
        source: "/core/dom_component.js",
        weight: 10572,
        target: "/events/short.js"
    },
    {
        source: "/viz/core/renderers/renderer.js",
        weight: 1800,
        target: "/core/utils/svg.js"
    },
    {
        source: "/viz/core/renderers/renderer.js",
        weight: 7020,
        target: "/viz/core/renderers/animation.js"
    },
    {
        source: "/format_helper.js",
        weight: 1098,
        target: "/localization/currency.js"
    },
    {
        source: "/localization/message.js",
        weight: 1289,
        target: "/localization/core.js"
    },
    {
        source: "/format_helper.js",
        weight: 11840,
        target: "/localization/number.js"
    },
    {
        source: "/format_helper.js",
        weight: 6121,
        target: "/localization/date.js"
    },
    {
        source: "/viz/core/plaque.js",
        weight: 350,
        target: "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
    },
    {
        source: "/exporter.js",
        weight: 6920,
        target: "/exporter/file_saver.js"
    },
    {
        source: "/exporter.js",
        weight: 4440,
        target: "/exporter/excel_format_converter.js"
    },
    {
        source: "/exporter.js",
        weight: 29622,
        target: "/exporter/excel_creator.js"
    },
    {
        source: "/exporter.js",
        weight: 26928,
        target: "/exporter/image_creator.js"
    },
    {
        source: "/exporter.js",
        weight: 3568,
        target: "/exporter/svg_creator.js"
    },
    {
        source: "/exporter.js",
        weight: 3949,
        target: "/exporter/pdf_creator.js"
    },
    {
        source: "/localization/message.js",
        weight: 33809,
        target: "/localization/default_messages.js"
    },
    {
        source: "/ui/themes.js",
        weight: 1050,
        target: "/core/polyfills/promise.js"
    },
    {
        source: "/ui/themes.js",
        weight: 359,
        target: "/ui/themes_callback.js"
    },
    {
        source: "/exporter/file_saver.js",
        weight: 5972,
        target: "/ui/widget/ui.errors.js"
    },
    {
        source: "/core/component.js",
        weight: 1872,
        target: "/core/options/utils.js"
    },
    {
        source: "/core/component.js",
        weight: 6775,
        target: "/core/options/index.js"
    },
    {
        source: "/core/component.js",
        weight: 4769,
        target: "/core/action.js"
    },
    {
        source: "/core/component.js",
        weight: 1600,
        target: "/core/postponed_operations.js"
    },
    {
        source: "/exporter/image_creator.js",
        weight: 4603,
        target: "/core/utils/dom.js"
    },
    {
        source: "/core/template_manager.js",
        weight: 633,
        target: "/core/templates/function_template.js"
    },
    {
        source: "/core/template_manager.js",
        weight: 459,
        target: "/core/templates/empty_template.js"
    },
    {
        source: "/core/template_manager.js",
        weight: 4371,
        target: "/core/utils/template_manager.js"
    },
    {
        source: "/events/short.js",
        weight: 3259,
        target: "/events/core/keyboard_processor.js"
    },
    {
        source: "/viz/core/renderers/animation.js",
        weight: 2084,
        target: "/animation/frame.js"
    },
    {
        source: "/localization/number.js",
        weight: 986,
        target: "/localization/utils.js"
    },
    {
        source: "/localization/number.js",
        weight: 8116,
        target: "/localization/ldml/number.js"
    },
    {
        source: "/localization/core.js",
        weight: 4413,
        target: "/localization/cldr-data/parent_locales.js"
    },
    {
        source: "/localization/core.js",
        weight: 562,
        target: "/localization/parentLocale.js"
    },
    {
        source: "/localization/number.js",
        weight: 4410,
        target: "/localization/intl/number.js"
    },
    {
        source: "/localization/date.js",
        weight: 5488,
        target: "/localization/ldml/date.formatter.js"
    },
    {
        source: "/exporter/excel_format_converter.js",
        weight: 7850,
        target: "/localization/ldml/date.format.js"
    },
    {
        source: "/localization/date.js",
        weight: 9108,
        target: "/localization/ldml/date.parser.js"
    },
    {
        source: "/localization/date.js",
        weight: 1199,
        target: "/localization/default_date_names.js"
    },
    {
        source: "/localization/date.js",
        weight: 2836,
        target: "/localization/cldr-data/first_day_of_week_data.js"
    },
    {
        source: "/localization/date.js",
        weight: 10700,
        target: "/localization/intl/date.js"
    },
    {
        source: "/exporter/excel_format_converter.js",
        weight: 6856,
        target: "/localization/language_codes.js"
    },
    {
        source: "/exporter/excel_creator.js",
        weight: 5202,
        target: "/exporter/excel/excel.file.js"
    },
    {
        source: "/exporter/svg_creator.js",
        weight: 9773,
        target: "/core/utils/ajax.js"
    },
    {
        source: "/core/options/index.js",
        weight: 3556,
        target: "/core/options/option_manager.js"
    },
    {
        source: "/core/utils/template_manager.js",
        weight: 1612,
        target: "/core/templates/template_base.js"
    },
    {
        source: "/core/utils/template_manager.js",
        weight: 472,
        target: "/core/templates/child_default_template.js"
    },
    {
        source: "/core/utils/template_manager.js",
        weight: 1364,
        target: "/core/templates/template.js"
    },
    {
        source: "/localization/intl/number.js",
        weight: 1406,
        target: "/localization/open_xml_currency_format.js"
    },
    {
        source: "/localization/intl/number.js",
        weight: 22908,
        target: "/localization/cldr-data/accounting_formats.js"
    },
    {
        source: "/exporter/excel/excel.file.js",
        weight: 943,
        target: "/exporter/excel/excel.tag_helper.js"
    },
    {
        source: "/exporter/excel/excel.file.js",
        weight: 3168,
        target: "/exporter/excel/excel.fill_helper.js"
    },
    {
        source: "/exporter/excel/excel.file.js",
        weight: 3832,
        target: "/exporter/excel/excel.font_helper.js"
    },
    {
        source: "/exporter/excel/excel.file.js",
        weight: 3666,
        target: "/exporter/excel/excel.cell_format_helper.js"
    },
    {
        source: "/exporter/excel/excel.file.js",
        weight: 1378,
        target: "/exporter/excel/excel.number_format_helper.js"
    },
    {
        source: "/core/utils/ajax.js",
        weight: 548,
        target: "/core/http_request.js"
    },
    {
        source: "/core/options/option_manager.js",
        weight: 1196,
        target: "/core/utils/comparator.js"
    },
    {
        source: "/core/templates/template_base.js",
        weight: 995,
        target: "/events/visibility_change.js"
    },
    {
        source: "/core/templates/template.js",
        weight: 948,
        target: "/core/templates/template_engine_registry.js"
    },
    {
        source: "/core/templates/template.js",
        weight: 1591,
        target: "/core/templates/template_engines.js"
    },
    {
        source: "/exporter/excel/excel.cell_format_helper.js",
        weight: 2126,
        target: "/exporter/excel/excel.cell_alignment_helper.js"
    },
    {
        source: "/exporter/excel/excel.font_helper.js",
        weight: 2686,
        target: "/exporter/excel/excel.color_helper.js"
    },
    {
        source: "/exporter/excel/excel.fill_helper.js",
        weight: 2447,
        target: "/exporter/excel/excel.pattern_fill_helper.js"
    }
]