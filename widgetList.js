const all = {
    Accordion: 'devextreme/ui/accordion',
    ActionSheet: 'devextreme/ui/action_sheet',
    Autocomplete: 'devextreme/ui/autocomplete',
    BarGauge: 'devextreme/viz/bar_gauge',
    Box: 'devextreme/ui/box',
    Bullet: 'devextreme/viz/bullet',
    Button: 'devextreme/ui/button',
    Calendar: 'devextreme/ui/calendar',
    Chart: 'devextreme/viz/chart',
    CheckBox: 'devextreme/ui/check_box',
    CircularGauge: 'devextreme/viz/circular_gauge',
    ColorBox: 'devextreme/ui/color_box',
    ContextMenu: 'devextreme/ui/context_menu',
    DataGrid: 'devextreme/ui/data_grid',
    DateBox: 'devextreme/ui/date_box',
    DeferRendering: 'devextreme/ui/defer_rendering',
    Drawer: 'devextreme/ui/drawer',
    DropDownBox: 'devextreme/ui/drop_down_box',
    FileManager: 'devextreme/ui/file_manager',
    FileUploader: 'devextreme/ui/file_uploader',
    FilterBuilder: 'devextreme/ui/filter_builder',
    Form: 'devextreme/ui/form',
    Funnel: 'devextreme/viz/funnel',
    Gallery: 'devextreme/ui/gallery',
    Gantt: 'devextreme/ui/gantt',
    HtmlEditor: 'devextreme/ui/html_editor',
    LinearGauge: 'devextreme/viz/linear_gauge',
    List: 'devextreme/ui/list',
    LoadIndicator: 'devextreme/ui/load_indicator',
    LoadPanel: 'devextreme/ui/load_panel',
    Lookup: 'devextreme/ui/lookup',
    Map: 'devextreme/ui/map',
    Menu: 'devextreme/ui/menu',
    MultiView: 'devextreme/ui/multi_view',
    NavBar: 'devextreme/ui/nav_bar',
    NumberBox: 'devextreme/ui/number_box',
    PieChart: 'devextreme/viz/pie_chart',
    PivotGrid: 'devextreme/ui/pivot_grid',
    PivotGridFieldChooser: 'devextreme/ui/pivot_grid_field_chooser',
    PolarChart: 'devextreme/viz/polar_chart',
    Popover: 'devextreme/ui/popover',
    Popup: 'devextreme/ui/popup',
    ProgressBar: 'devextreme/ui/progress_bar',
    RangeSelector: 'devextreme/viz/range_selector',
    RangeSlider: 'devextreme/ui/range_slider',
    RadioGroup: 'devextreme/ui/radio_group',
    Resizable: 'devextreme/ui/resizable',
    ResponsiveBox: 'devextreme/ui/responsive_box',
    Sankey: 'devextreme/viz/sankey',
    Scheduler: 'devextreme/ui/scheduler',
    ScrollView: 'devextreme/ui/scroll_view',
    SelectBox: 'devextreme/ui/select_box',
    SlideOut: 'devextreme/ui/slide_out',
    SlideOutView: 'devextreme/ui/slide_out_view',
    Slider: 'devextreme/ui/slider',
    Sparkline: 'devextreme/viz/sparkline',
    Switch: 'devextreme/ui/switch',
    TabPanel: 'devextreme/ui/tab_panel',
    Tabs: 'devextreme/ui/tabs',
    TagBox: 'devextreme/ui/tag_box',
    TextArea: 'devextreme/ui/text_area',
    TextBox: 'devextreme/ui/text_box',
    TileView: 'devextreme/ui/tile_view',
    Toast: 'devextreme/ui/toast',
    Toolbar: 'devextreme/ui/toolbar',
    Tooltip: 'devextreme/ui/tooltip',
    TreeList: 'devextreme/ui/tree_list',
    TreeMap: 'devextreme/viz/tree_map',
    TreeView: 'devextreme/ui/tree_view',
    ValidationGroup: 'devextreme/ui/validation_group',
    ValidationSummary: 'devextreme/ui/validation_summary',
    VectorMap: 'devextreme/viz/vector_map'
};

all[Symbol.iterator] = function* () {
    for(let prop in all)
        yield prop;
}

const dropDownEditors = {
    dxAutocomplete: 'devextreme/ui/autocomplete',
    dxColorBox: 'devextreme/ui/color_box',
    dxDateBox: 'devextreme/ui/date_box',
    dxDropDownBox: 'devextreme/ui/drop_down_box',
    dxDropDownButton: 'devextreme/ui/drop_down_button',
    dxSelectBox: 'devextreme/ui/select_box',
    dxTagBox: 'devextreme/ui/tag_box',
    dxDropDownEditor: 'devextreme/ui/drop_down_editor/ui.drop_down_editor.js',
    dxDropDownList: 'devextreme/ui/drop_down_editor/ui.drop_down_list.js',
};

dropDownEditors[Symbol.iterator] = function* () {
    for(let prop in dropDownEditors)
        yield prop;
}

export default {
    all,
    dropDownEditors
}