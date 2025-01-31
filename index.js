Ext.application({
    name: 'IconsDemo',
    launch: function () {
        // 定义图标数据
        var iconsData = [
            { name: 'Add', cls: 'x-grid-center-icon x-grid-center-add', usage: "iconCls: 'x-grid-center-add'" },
            { name: 'Edit', cls: 'x-grid-center-icon x-grid-center-edit', usage: "iconCls: 'x-grid-center-edit'" },
            { name: 'Delete', cls: 'x-grid-center-icon x-grid-center-delete', usage: "iconCls: 'x-grid-center-delete'" },
            { name: 'Save', cls: 'x-grid-center-icon x-grid-center-save', usage: "iconCls: 'x-grid-center-save'" },
            { name: 'Search', cls: 'x-grid-center-icon x-grid-center-search', usage: "iconCls: 'x-grid-center-search'" },
            { name: 'Refresh', cls: 'x-grid-center-icon x-grid-center-refresh', usage: "iconCls: 'x-grid-center-refresh'" },
            { name: 'Settings', cls: 'x-grid-center-icon x-grid-center-gear', usage: "iconCls: 'x-grid-center-gear'" },
            { name: 'User', cls: 'x-grid-center-icon x-grid-center-user', usage: "iconCls: 'x-grid-center-user'" },
            { name: 'Home', cls: 'x-grid-center-icon x-grid-center-home', usage: "iconCls: 'x-grid-center-home'" },
            { name: 'Tools', cls: 'x-grid-center-icon x-grid-center-gear', usage: "iconCls: 'x-grid-center-gear'" }
        ];

        // 创建数据存储
        var store = Ext.create('Ext.data.Store', {
            fields: ['name', 'cls', 'usage'],
            data: iconsData
        });

        // 创建网格面板
        Ext.create('Ext.grid.Panel', {
            title: 'ExtJS Built-in Icons Demo',
            store: store,
            columns: [{
                text: 'Icon',
                dataIndex: 'cls',
                width: 100,
                renderer: function (value) {
                    return '<div style="text-align:center"><span class="' + value + '"></span></div>';
                }
            }, {
                text: 'Name',
                dataIndex: 'name',
                width: 100
            }, {
                text: 'CSS Class',
                dataIndex: 'cls',
                flex: 1
            }, {
                text: 'Usage Example',
                dataIndex: 'usage',
                flex: 1
            }],
            width: 800,
            height: 400,
            renderTo: 'main',
            frame: true,
            tbar: [{
                text: 'Add',
                iconCls: 'x-grid-center-add'
            }, {
                text: 'Edit',
                iconCls: 'x-grid-center-edit'
            }, {
                text: 'Delete',
                iconCls: 'x-grid-center-delete'
            }, {
                text: 'Save',
                iconCls: 'x-grid-center-save'
            }, {
                text: 'Refresh',
                iconCls: 'x-grid-center-refresh'
            }]
        });
    }
});
