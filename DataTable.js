"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _urlJoin = _interopRequireDefault(require("url-join"));

var _config = require("../utils/config");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DataTableWithAgentbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTableWithAgentbar, _React$Component);

  function DataTableWithAgentbar(props) {
    var _props$onSortedChange;

    var _this;

    _classCallCheck(this, DataTableWithAgentbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTableWithAgentbar).call(this, props));
    _this.state = {
      pageSize: 20,
      sort: props.config.defaultSorted || []
    };
    (_props$onSortedChange = props.onSortedChange) === null || _props$onSortedChange === void 0 ? void 0 : _props$onSortedChange.call(props, props.config.defaultSorted);
    return _this;
  }

  _createClass(DataTableWithAgentbar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash.isEqual)(nextProps.sqon, this.props.sqon)) {
        this.setState({
          page: 0
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Here we link this props with Search component
      this.props.rows(this.props.selectedTableRows);

      var _this2 = this;

      var _this$props = this.props,
          config = _this$props.config,
          fetchData = _this$props.fetchData,
          setSelectedTableRows = _this$props.setSelectedTableRows,
          sqon = _this$props.sqon,
          _this$props$selectedT = _this$props.selectedTableRows,
          selectedTableRows = _this$props$selectedT === void 0 ? null : _this$props$selectedT,
          _this$props$allowTogg = _this$props.allowTogglingColumns,
          allowTogglingColumns = _this$props$allowTogg === void 0 ? true : _this$props$allowTogg,
          _this$props$allowTSVE = _this$props.allowTSVExport,
          allowTSVExport = _this$props$allowTSVE === void 0 ? true : _this$props$allowTSVE,
          _this$props$customAct = _this$props.customActions,
          customActions = _this$props$customAct === void 0 ? null : _this$props$customAct,
          _this$props$data = _this$props.data,
          data = _this$props$data === void 0 ? null : _this$props$data,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? null : _this$props$loading,
          tableStyle = _this$props.tableStyle,
          agentbarStyle = _this$props.agentbarStyle,
          onFilterChange = _this$props.onFilterChange,
          _this$props$onColumns = _this$props.onColumnsChange,
          onColumnsChange = _this$props$onColumns === void 0 ? function () {} : _this$props$onColumns,
          columnDropdownText = _this$props.columnDropdownText,
          exportTSVText = _this$props.exportTSVText,
          exportTSVFilename = _this$props.exportTSVFilename,
          exporter = _this$props.exporter,
          transformParams = _this$props.transformParams,
          maxPagesOptions = _this$props.maxPagesOptions,
          _this$props$projectId = _this$props.projectId,
          projectId = _this$props$projectId === void 0 ? _config.PROJECT_ID : _this$props$projectId,
          _this$props$downloadU = _this$props.downloadUrl,
          downloadUrl = _this$props$downloadU === void 0 ? (0, _urlJoin.default)(_config.ARRANGER_API, projectId, 'download') : _this$props$downloadU,
          _this$props$onSortedC = _this$props.onSortedChange,
          _onSortedChange = _this$props$onSortedC === void 0 ? function () {} : _this$props$onSortedC,
          _this$props$alwaysSor = _this$props.alwaysSorted,
          alwaysSorted = _this$props$alwaysSor === void 0 ? [] : _this$props$alwaysSor,
          _this$props$initalSel = _this$props.initalSelectedTableRows,
          initalSelectedTableRows = _this$props$initalSel === void 0 ? [] : _this$props$initalSel,
          _this$props$keepSelec = _this$props.keepSelectedOnPageChange,
          keepSelectedOnPageChange = _this$props$keepSelec === void 0 ? false : _this$props$keepSelec,
          _this$props$showFilte = _this$props.showFilterInput,
          showFilterInput = _this$props$showFilte === void 0 ? true : _this$props$showFilte,
          filterInputPlaceholder = _this$props.filterInputPlaceholder,
          InputComponent = _this$props.InputComponent,
          _this$props$customHea = _this$props.customHeaderContent,
          customHeaderContent = _this$props$customHea === void 0 ? null : _this$props$customHea;

      var _this$state = this.state,
          page = _this$state.page,
          pageSize = _this$state.pageSize,
          total = _this$state.total;
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.TableAgentbar, {
            filterInputPlaceholder: filterInputPlaceholder,
            onFilterChange: onFilterChange,
            style: agentbarStyle,
            propsData: data,
            customActions: customActions,
            allowTogglingColumns: allowTogglingColumns,
            allowTSVExport: allowTSVExport,
            sqon: sqon,
            columns: config.columns,
            onColumnsChange: onColumnsChange,
            total: total,
            page: page,
            pageSize: pageSize,
            type: config.type,
            columnDropdownText: columnDropdownText,
            exportTSVText: exportTSVText,
            exportTSVFilename: exportTSVFilename,
            exporter: exporter,
            transformParams: transformParams,
            downloadUrl: downloadUrl,
            InputComponent: InputComponent,
            showFilterInput: showFilterInput,
            customHeaderContent: customHeaderContent
          }), _react.default.createElement(_.Table, {
            style: tableStyle,
            propsData: data,
            sqon: sqon,
            config: config,
            fetchData: fetchData,
            setSelectedTableRows: setSelectedTableRows,
            onPaginationChange: function onPaginationChange(state) {
              return _this2.setState(state);
            },
            onSortedChange: function onSortedChange(sort) {
              _this2.setState({
                sort: sort,
                page: 0
              });
    
              _onSortedChange(sort);
            },
            defaultPageSize: pageSize,
            loading: loading,
            maxPagesOptions: maxPagesOptions,
            alwaysSorted: alwaysSorted,
            initalSelectedTableRows: initalSelectedTableRows,
            keepSelectedOnPageChange: keepSelectedOnPageChange,
            selectedTableRows: selectedTableRows
          }), /*_react.default.createElement("p", {
            propsData: data,
            sqon: sqon,
            config: config.columns,
            fetchData: fetchData,
            setSelectedTableRows: setSelectedTableRows,
            onClick: fetchData
          }, "fetchData.total")*/
          
      );
    }
  }]);

  return DataTableWithAgentbar;
}(_react.default.Component);

var _default = DataTableWithAgentbar;
exports.default = _default;