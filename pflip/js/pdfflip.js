'use strict';
var pdfflip = pdfflip || {},
    PRESENTATION = pdfflip;
! function(_0xb07ax3, _0xb07ax4) {
    _0xb07ax3['version'] = '1.4.31', _0xb07ax3['PAGE_MODE'] = {
        SINGLE: 1,
        DOUBLE: 2,
        AUTO: null
    }, _0xb07ax3['SINGLE_PAGE_MODE'] = {
        ZOOM: 1,
        BOOKLET: 2,
        AUTO: null
    }, _0xb07ax3['CONTROLSPOSITION'] = {
        HIDDEN: 'hide',
        TOP: 'top',
        BOTTOM: 'bottom'
    }, _0xb07ax3['DIRECTION'] = {
        LTR: 1,
        RTL: 2
    }, _0xb07ax3['CORNERS'] = {
        TL: 'tl',
        TR: 'tr',
        BL: 'bl',
        BR: 'br',
        L: 'l',
        R: 'r',
        NONE: null
    }, _0xb07ax3['SOURCE_TYPE'] = {
        IMAGE: 'image',
        PDF: 'pdf',
        HTML: 'html'
    }, _0xb07ax3['DISPLAY_TYPE'] = {
        WEBGL: '3D',
        HTML: '2D'
    }, _0xb07ax3['PAGE_SIZE'] = {
        AUTO: 0,
        SINGLE: 1,
        DOUBLEINTERNAL: 2
    };
    var _0xb07ax5, _0xb07ax6, _0xb07ax7, _0xb07ax8, _0xb07ax9 = _0xb07ax3['defaults'] = {
            webgl: !0,
            webglShadow: !0,
            enableSound: !0,
            height: '100%',
            autoEnableOutline: !1,
            autoEnableThumbnail: !1,
            overwritePDFOutline: !0,
            downloadEnable: !0,
            duration: 800,
            direction: _0xb07ax3['DIRECTION']['LTR'],
            pageMode: _0xb07ax3['PAGE_MODE']['AUTO'],
            singlePageMode: _0xb07ax3['SINGLE_PAGE_MODE']['AUTO'],
            backgroundColor: '#fff',
            forceFit: !0,
            transparent: !1,
            hard: 'none',
            openPage: 1,
            annotationClass: '',
            autoPlay: !0,
            autoPlayDuration: 3e3,
            autoPlayStart: !1,
            maxTextureSize: 1600,
            minTextureSize: 256,
            rangeChunkSize: 524288,
            icons: {
                altnext: 'ti-angle-right',
                altprev: 'ti-angle-right',
                next: 'fa fa-chevron-right',
                prev: 'fa fa-chevron-left',
                end: 'ti-angle-double-right',
                start: 'ti-angle-double-left',
                share: 'fa fa-share',
                help: 'ti-help-alt',
                more: 'ti-more-alt',
                download: 'fa fa-file-ppdff-o',
                zoomin: 'ti-zoom-in',
                zoomout: 'ti-zoom-out',
                fullscreen: 'fa fa-arrows-alt',
                fitscreen: 'ti-arrows-corner',
                thumbnail: 'ti-layout-grid2',
                outline: 'ti-menu-alt',
                close: 'ti-close',
                doublepage: 'ti-book',
                singlepage: 'ti-file',
                sound: 'ti-volume',
                facebook: 'ti-facebook',
                google: 'ti-google',
                twitter: 'ti-twitter-alt',
                mail: 'ti-email',
                play: 'ti-control-play',
                pause: 'ti-control-pause'
            },
            text: {
                toggleSound: 'Sound',
                toggleThumbnails: 'Thumbnails',
                toggleOutline: 'Contents',
                previousPage: 'Previous Page',
                nextPage: 'Next Page',
                toggleFullscreen: 'Fullscreen',
                zoomIn: 'Zoom In',
                zoomOut: 'Zoom Out',
                downloadPDFFile: 'Download PDF',
                gotoFirstPage: 'First Page',
                gotoLastPage: 'Last Page',
                play: 'AutoPlay On',
                pause: 'AutoPlay Off',
                share: 'Share'
            },
            allControls: 'startPage,altPrev,pageNumber,altNext,endPage,play,outline,thumbnail,zoomIn,zoomOut,fullScreen,share,download,sound',
            moreControls: '',
            hideControls: '',
            controlsPosition: _0xb07ax3['CONTROLSPOSITION']['BOTTOM'],
            paddingTop: 15,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: -10,
            scrollWheel: !0,
            onCreate: function(_0xb07ax3) {},
            onCreateUI: function(_0xb07ax3) {},
            onFlip: function(_0xb07ax3) {},
            beforeFlip: function(_0xb07ax3) {},
            onReady: function(_0xb07ax3) {},
            zoomRatio: 1.5,
            pageSize: _0xb07ax3['PAGE_SIZE']['AUTO'],
            pdfjsSrc: 'js/libs/pdf.min.js',
            pdfjsCompatibilitySrc: 'js/libs/compatibility.js',
            pdfjsWorkerSrc: 'js/libs/pdf.worker.min.js',
            threejsSrc: 'js/libs/three.min.js',
            utilsSrc: 'js/libs/utils.min.js',
            soundFile: 'sound/turn.mp3',
            imagesLocation: 'images',
            imageResourcesPath: 'images/pdfjs/',
            cMapUrl: 'cmaps/',
            enableDebugLog: !1,
            canvasToBlob: !1,
            enableAnnotation: !0,
            pdfRenderQuality: 0.9,
            textureLoadFallback: 'blank',
            stiffness: 3,
            backgroundImage: 'pflip/background.jpg',
            pageRatio: null,
            pixelRatio: window['devicePixelRatio'] || 1,
            thumbElement: 'div',
            spotLightIntensity: 0.22,
            ambientLightColor: '#fff',
            ambientLightIntensity: 0.8,
            shadowOpacity: 0.08
        },
        _0xb07axa = 'WebKitCSSMatrix' in window || document['body'] && 'MozPerspective' in document['body']['style'],
        _0xb07axb = 'onmousedown' in window,
        _0xb07axc = (window, navigator['userAgent']),
        _0xb07axd = _0xb07ax3['utils'] = {
            drag: {
                left: 0,
                right: 1,
                none: -1
            },
            mouseEvents: _0xb07axb ? {
                type: 'mouse',
                start: 'mousedown',
                move: 'mousemove',
                end: 'mouseup'
            } : {
                type: 'touch',
                start: 'touchstart',
                move: 'touchmove',
                end: 'touchend'
            },
            html: {
                div: '<div/>',
                img: '<img/>',
                a: '<a>',
                input: '<input type=\'text\'/>'
            },
            toRad: function(_0xb07ax3) {
                return _0xb07ax3 * Math['PI'] / 180
            },
            isset: function(_0xb07ax3, _0xb07ax4) {
                return null == _0xb07ax3 ? _0xb07ax4 : _0xb07ax3
            },
            isnull: function(_0xb07ax3) {
                return null == _0xb07ax3 || null == _0xb07ax3
            },
            toDeg: function(_0xb07ax3) {
                return 180 * _0xb07ax3 / Math['PI']
            },
            transition: function(_0xb07ax3, _0xb07ax4) {
                return _0xb07ax3 ? _0xb07ax4 / 1e3 + 's ease-out' : '0s none'
            },
            display: function(_0xb07ax3) {
                return _0xb07ax3 ? 'block' : 'none'
            },
            resetTranslate: function() {
                return _0xb07ax15(0, 0)
            },
            translateStr: function(_0xb07ax3, _0xb07ax4) {
                return _0xb07axa ? ' translate3d(' + _0xb07ax3 + 'px,' + _0xb07ax4 + 'px, 0px) ' : ' translate(' + _0xb07ax3 + 'px, ' + _0xb07ax4 + 'px) '
            },
            httpsCorrection: function(_0xb07ax3) {
                var _0xb07ax4 = window['location'];
                return _0xb07ax4['href']['indexOf']('https://') > -1 && _0xb07ax3['indexOf'](_0xb07ax4['hostname']) > -1 && (_0xb07ax3 = _0xb07ax3['replace']('http://', 'https://')), _0xb07ax3
            },
            resetBoxShadow: function() {
                return 'rgba(0, 0, 0, 0) 0px 0px 20px'
            },
            rotateStr: function(_0xb07ax3) {
                return ' rotateZ(' + _0xb07ax3 + 'deg) '
            },
            bg: function(_0xb07ax3) {
                return '#fff' + _0xb07ax17(_0xb07ax3)
            },
            bgImage: function(_0xb07ax3) {
                return null == _0xb07ax3 || 'blank' == _0xb07ax3 ? '' : ' url(' + _0xb07ax3 + ')'
            },
            src: function(_0xb07ax3) {
                return null != _0xb07ax3 ? '' + _0xb07ax3 : ''
            },
            limitAt: function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                return _0xb07ax3 < _0xb07ax4 ? _0xb07ax4 : _0xb07ax3 > _0xb07ax5 ? _0xb07ax5 : _0xb07ax3
            },
            distOrigin: function(_0xb07ax3, _0xb07ax4) {
                return Math['sqrt'](Math['pow'](_0xb07ax3, 2) + Math['pow'](_0xb07ax4, 2))
            },
            distPoints: function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6) {
                return Math['sqrt'](Math['pow'](_0xb07ax5 - _0xb07ax3, 2) + Math['pow'](_0xb07ax6 - _0xb07ax4, 2))
            },
            calculateScale: function(_0xb07ax3, _0xb07ax4) {
                var _0xb07ax5 = _0xb07ax1a(_0xb07ax3[0]['x'], _0xb07ax3[0]['y'], _0xb07ax3[1]['x'], _0xb07ax3[1]['y']);
                return _0xb07ax1a(_0xb07ax4[0]['x'], _0xb07ax4[0]['y'], _0xb07ax4[1]['x'], _0xb07ax4[1]['y']) / _0xb07ax5
            },
            getVectorAvg: function(_0xb07ax3) {
                return {
                    x: _0xb07ax3['map'](function(_0xb07ax3) {
                        return _0xb07ax3['x']
                    })['reduce'](_0xb07axd['sum']) / _0xb07ax3['length'],
                    y: _0xb07ax3['map'](function(_0xb07ax3) {
                        return _0xb07ax3['y']
                    })['reduce'](_0xb07axd['sum']) / _0xb07ax3['length']
                }
            },
            sum: function(_0xb07ax3, _0xb07ax4) {
                return _0xb07ax3 + _0xb07ax4
            },
            getTouches: function(_0xb07ax3, _0xb07ax4) {
                return _0xb07ax4 = _0xb07ax4 || {
                    left: 0,
                    top: 0
                }, Array['prototype']['slice']['call'](_0xb07ax3['touches'])['map'](function(_0xb07ax3) {
                    return {
                        x: _0xb07ax3['pageX'] - _0xb07ax4['left'],
                        y: _0xb07ax3['pageY'] - _0xb07ax4['top']
                    }
                })
            },
            angleByDistance: function(_0xb07ax3, _0xb07ax4) {
                var _0xb07ax5 = _0xb07ax4 / 2,
                    _0xb07ax6 = _0xb07ax18(_0xb07ax3, 0, _0xb07ax4);
                return _0xb07ax6 < _0xb07ax5 ? _0xb07ax14(Math['asin'](_0xb07ax6 / _0xb07ax5)) : 90 + _0xb07ax14(Math['asin']((_0xb07ax6 - _0xb07ax5) / _0xb07ax5))
            },
            log: function(_0xb07ax3) {
                1 == _0xb07ax9['enableDebugLog'] && window['console'] && console['log'](_0xb07ax3)
            },
            lowerPowerOfTwo: function(_0xb07ax3) {
                return Math['pow'](2, Math['floor'](Math['log'](_0xb07ax3) / Math['LN2']))
            },
            nearestPowerOfTwo: function(_0xb07ax3, _0xb07ax4) {
                return Math['min'](_0xb07ax4 || 2048, Math['pow'](2, Math['ceil'](Math['log'](_0xb07ax3) / Math['LN2'])))
            },
            zoomStops: function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6, _0xb07ax7) {
                null == _0xb07ax6 && (_0xb07ax6 = 256), null == _0xb07ax7 && (_0xb07ax7 = 2048);
                var _0xb07ax8 = Math['log'](_0xb07ax3 / _0xb07ax6) / Math['log'](_0xb07ax4);
                return _0xb07ax6 * Math['pow'](_0xb07ax4, null == _0xb07ax5 ? Math['round'](_0xb07ax8) : 1 == _0xb07ax5 ? Math['ceil'](_0xb07ax8) : Math['floor'](_0xb07ax8))
            },
            extendOptions: function(_0xb07ax3, _0xb07ax5) {
                return _0xb07ax4['extend'](!0, {}, _0xb07ax3, _0xb07ax5)
            },
            getFullscreenElement: function() {
                return document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']
            },
            hasFullscreenEnabled: function() {
                return document['fullscreenEnabled'] || document['mozFullScreenEnabled'] || document['webkitFullscreenEnabled'] || document['msFullscreenEnabled']
            },
            getBasePage: function(_0xb07ax3) {
                return 2 * Math['floor'](_0xb07ax3 / 2)
            },
            loadResources: function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                var _0xb07ax6 = document,
                    _0xb07ax7 = _0xb07ax6['createElement'](_0xb07ax3),
                    _0xb07ax8 = _0xb07ax6['getElementsByTagName'](_0xb07ax3)[0];
                _0xb07ax7['async'] = !0, _0xb07ax5 && _0xb07ax7['addEventListener']('load', function(_0xb07ax3) {
                    _0xb07ax5(null, _0xb07ax3)
                }, !1), _0xb07ax7['src'] = _0xb07ax4, _0xb07ax8['parentNode']['insertBefore'](_0xb07ax7, _0xb07ax8)
            },
            getScript: function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                var _0xb07ax6 = document['createElement']('script'),
                    _0xb07ax7 = document['body']['getElementsByTagName']('script')[0];

                function _0xb07ax8(_0xb07ax3, _0xb07ax7) {
                    null != _0xb07ax6 && (_0xb07ax7 || !_0xb07ax6['readyState'] || /loaded|complete/ ['test'](_0xb07ax6['readyState'])) && (_0xb07ax6['onload'] = _0xb07ax6['onreadystatechange'] = null, _0xb07ax6 = null, _0xb07ax6 = null, _0xb07ax7 || (_0xb07ax4 && _0xb07ax4(), _0xb07ax4 = null, _0xb07ax5 = null))
                }
                _0xb07ax6['async'] = 1, _0xb07ax6['setAttribute']('data-cfasync', !1), null != _0xb07ax7 ? (_0xb07ax7['parentNode']['insertBefore'](_0xb07ax6, _0xb07ax7), _0xb07ax7 = null) : document['body']['appendChild'](_0xb07ax6), _0xb07ax6['addEventListener']('load', _0xb07ax8, !1), _0xb07ax6['addEventListener']('readystatechange', _0xb07ax8, !1), _0xb07ax6['addEventListener']('complete', _0xb07ax8, !1), _0xb07ax5 && _0xb07ax6['addEventListener']('error', _0xb07ax5, !1), _0xb07ax6['src'] = _0xb07ax3 + ('MS' == _0xb07ax22['dom'] ? '?' + Math['random'](1) : '')
            },
            isHardPage: function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6) {
                if (null != _0xb07ax3) {
                    if ('cover' == _0xb07ax3) {
                        return 0 == _0xb07ax4 || _0xb07ax6 && 1 == _0xb07ax4 || _0xb07ax4 == Math['floor'](_0xb07ax5 / (_0xb07ax6 ? 1 : 2)) - (_0xb07ax6 ? 0 : 1)
                    };
                    if ('all' == _0xb07ax3) {
                        return !0
                    };
                    var _0xb07ax7 = (',' + _0xb07ax3 + ',')['indexOf'](',' + (2 * _0xb07ax4 + 1) + ',') > -1,
                        _0xb07ax8 = (',' + _0xb07ax3 + ',')['indexOf'](',' + (2 * _0xb07ax4 + 2) + ',') > -1;
                    return _0xb07ax7 || _0xb07ax8
                };
                return !1
            },
            fixMouseEvent: function(_0xb07ax3) {
                if (_0xb07ax3) {
                    var _0xb07ax5 = _0xb07ax3['originalEvent'] || _0xb07ax3;
                    if (_0xb07ax5['changedTouches'] && _0xb07ax5['changedTouches']['length'] > 0) {
                        var _0xb07ax6 = _0xb07ax4['event']['fix'](_0xb07ax3),
                            _0xb07ax7 = _0xb07ax5['changedTouches'][0];
                        return _0xb07ax6['clientX'] = _0xb07ax7['clientX'], _0xb07ax6['clientY'] = _0xb07ax7['clientY'], _0xb07ax6['pageX'] = _0xb07ax7['pageX'], _0xb07ax6['touches'] = _0xb07ax5['touches'], _0xb07ax6['pageY'] = _0xb07ax7['pageY'], _0xb07ax6['movementX'] = _0xb07ax7['movementX'], _0xb07ax6['movementY'] = _0xb07ax7['movementY'], _0xb07ax6
                    };
                    return _0xb07ax3
                };
                return _0xb07ax3
            },
            hasWebgl: function() {
                try {
                    var _0xb07ax3 = document['createElement']('canvas');
                    return !(!window['WebGLRenderingContext'] || !_0xb07ax3['getContext']('webgl') && !_0xb07ax3['getContext']('experimental-webgl'))
                } catch (_0xb07ax3) {
                    return !1
                }
            }(),
            isBookletMode: function(_0xb07ax4) {
                return _0xb07ax4['pageMode'] == _0xb07ax3['PAGE_MODE']['SINGLE'] && _0xb07ax4['singlePageMode'] == _0xb07ax3['SINGLE_PAGE_MODE']['BOOKLET']
            },
            isRTLMode: function(_0xb07ax4) {
                return _0xb07ax4['direction'] == _0xb07ax3['DIRECTION']['RTL']
            },
            isMobile: (_0xb07ax8 = !1, _0xb07ax7 = _0xb07axc || navigator['vendor'] || window['opera'], (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i ['test'](_0xb07ax7) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ['test'](_0xb07ax7['substr'](0, 4))) && (_0xb07ax8 = !0), _0xb07ax8),
            isIOS: /(iPad|iPhone|iPod)/g ['test'](_0xb07axc),
            isSafari: /constructor/i ['test'](window.HTMLElement) || '[object SafariRemoteNotification]' === (!window['safari'] || safari['pushNotification']).toString(),
            prefix: (_0xb07ax5 = window['getComputedStyle'](document['documentElement'], ''), _0xb07ax6 = Array['prototype']['slice']['call'](_0xb07ax5)['join']('')['match'](/-(moz|webkit|ms)-/)[1], {
                dom: 'WebKit|Moz|MS' ['match'](new RegExp('(' + _0xb07ax6 + ')', 'i'))[1],
                lowercase: _0xb07ax6,
                css: '-' + _0xb07ax6 + '-',
                js: _0xb07ax6[0]['toUpperCase']() + _0xb07ax6['substr'](1)
            }),
            __extends: function(_0xb07ax3, _0xb07ax4) {
                for (var _0xb07ax5 in _0xb07ax4) {
                    _0xb07ax4['hasOwnProperty'](_0xb07ax5) && (_0xb07ax3[_0xb07ax5] = _0xb07ax4[_0xb07ax5])
                };

                function _0xb07ax6() {
                    this['constructor'] = _0xb07ax3
                }
                return _0xb07ax6['prototype'] = _0xb07ax4['prototype'], _0xb07ax3['prototype'] = new _0xb07ax6, _0xb07ax3['__super'] = _0xb07ax4['prototype'], _0xb07ax3
            }
        },
        _0xb07axe = _0xb07ax3['SOURCE_TYPE'],
        _0xb07axf = (_0xb07ax3['DISPLAY_TYPE'], _0xb07axd['drag']),
        _0xb07ax10 = _0xb07axd['mouseEvents'],
        _0xb07ax11 = _0xb07axd['html'],
        _0xb07ax12 = _0xb07axd['isset'],
        _0xb07ax13 = (_0xb07axd['isnull'], _0xb07axd['toRad']),
        _0xb07ax14 = _0xb07axd['toDeg'],
        _0xb07ax15 = (_0xb07axd['transition'], _0xb07axd['translateStr']),
        _0xb07ax16 = (_0xb07axd['resetBoxShadow'], _0xb07axd['rotateStr']),
        _0xb07ax17 = (_0xb07axd['bg'], _0xb07axd['bgImage']),
        _0xb07ax18 = (_0xb07axd['src'], _0xb07axd['limitAt']),
        _0xb07ax19 = _0xb07axd['distOrigin'],
        _0xb07ax1a = _0xb07axd['distPoints'],
        _0xb07ax1b = _0xb07axd['angleByDistance'],
        _0xb07ax1c = _0xb07axd['log'],
        _0xb07ax1d = _0xb07axd['nearestPowerOfTwo'],
        _0xb07ax1e = _0xb07axd['extendOptions'],
        _0xb07ax1f = _0xb07axd['getBasePage'],
        _0xb07ax20 = _0xb07axd['getScript'],
        _0xb07ax21 = _0xb07axd['fixMouseEvent'],
        _0xb07ax22 = _0xb07axd['prefix'],
        _0xb07ax23 = _0xb07axd['isBookletMode'],
        _0xb07ax24 = _0xb07axd['isRTLMode'],
        _0xb07ax25 = _0xb07axd['isMobile'],
        _0xb07ax26 = _0xb07axd['hasWebgl'],
        _0xb07ax27 = _0xb07axd['isSafari'],
        _0xb07ax28 = _0xb07axd['isIOS'],
        _0xb07ax29 = _0xb07axd['__extends'];
    ! function() {
        if (window['CanvasPixelArray']) {
            'function' != typeof window['CanvasPixelArray']['prototype']['set'] && (window['CanvasPixelArray']['prototype']['set'] = function(_0xb07ax3) {
                for (var _0xb07ax4 = 0, _0xb07ax5 = this['length']; _0xb07ax4 < _0xb07ax5; _0xb07ax4++) {
                    this[_0xb07ax4] = _0xb07ax3[_0xb07ax4]
                }
            })
        } else {
            var _0xb07ax3, _0xb07ax4 = !1;
            if (_0xb07ax27 && (_0xb07ax4 = (_0xb07ax3 = _0xb07axc['match'](/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//)) && parseInt(_0xb07ax3[1]) < 6), _0xb07ax4) {
                var _0xb07ax5 = window['CanvasRenderingContext2D']['prototype'],
                    _0xb07ax6 = _0xb07ax5['createImageData'];
                _0xb07ax5['createImageData'] = function(_0xb07ax3, _0xb07ax4) {
                    var _0xb07ax5 = _0xb07ax6['call'](this, _0xb07ax3, _0xb07ax4);
                    return _0xb07ax5['data']['set'] = function(_0xb07ax3) {
                        for (var _0xb07ax4 = 0, _0xb07ax5 = this['length']; _0xb07ax4 < _0xb07ax5; _0xb07ax4++) {
                            this[_0xb07ax4] = _0xb07ax3[_0xb07ax4]
                        }
                    }, _0xb07ax5
                }, _0xb07ax5 = null
            }
        }
    }(),
    function() {
        'requestAnimationFrame' in window || (window['requestAnimationFrame'] = window['mozRequestAnimationFrame'] || window['webkitRequestAnimationFrame'] || function(_0xb07ax3) {
            window['setTimeout'](_0xb07ax3, 20)
        })
    }(),
    function() {
        if ('undefined' != typeof Uint8Array) {
            return void(0) === Uint8Array['prototype']['subarray'] && (Uint8Array['prototype']['subarray'] = function(_0xb07ax3, _0xb07ax4) {
                return new Uint8Array(this['slice'](_0xb07ax3, _0xb07ax4))
            }, Float32Array['prototype']['subarray'] = function(_0xb07ax3, _0xb07ax4) {
                return new Float32Array(this['slice'](_0xb07ax3, _0xb07ax4))
            }), void(('undefined' == typeof Float64Array && (window['Float64Array'] = Float32Array)))
        };

        function _0xb07ax3(_0xb07ax3, _0xb07ax4) {
            return new _0xb07ax5(this['slice'](_0xb07ax3, _0xb07ax4))
        }

        function _0xb07ax4(_0xb07ax3, _0xb07ax4) {
            arguments['length'] < 2 && (_0xb07ax4 = 0);
            for (var _0xb07ax5 = 0, _0xb07ax6 = _0xb07ax3['length']; _0xb07ax5 < _0xb07ax6; ++_0xb07ax5, ++_0xb07ax4) {
                this[_0xb07ax4] = 255 & _0xb07ax3[_0xb07ax5]
            }
        }

        function _0xb07ax5(_0xb07ax5) {
            var _0xb07ax6, _0xb07ax7, _0xb07ax8;
            if ('number' == typeof _0xb07ax5) {
                for (_0xb07ax6 = [], _0xb07ax7 = 0; _0xb07ax7 < _0xb07ax5; ++_0xb07ax7) {
                    _0xb07ax6[_0xb07ax7] = 0
                }
            } else {
                if ('slice' in _0xb07ax5) {
                    _0xb07ax6 = _0xb07ax5['slice'](0)
                } else {
                    for (_0xb07ax6 = [], _0xb07ax7 = 0, _0xb07ax8 = _0xb07ax5['length']; _0xb07ax7 < _0xb07ax8; ++_0xb07ax7) {
                        _0xb07ax6[_0xb07ax7] = _0xb07ax5[_0xb07ax7]
                    }
                }
            };
            return _0xb07ax6['subarray'] = _0xb07ax3, _0xb07ax6['buffer'] = _0xb07ax6, _0xb07ax6['byteLength'] = _0xb07ax6['length'], _0xb07ax6['set'] = _0xb07ax4, 'object' == typeof _0xb07ax5 && _0xb07ax5['buffer'] && (_0xb07ax6['buffer'] = _0xb07ax5['buffer']), _0xb07ax6
        }
        window['Uint8Array'] = _0xb07ax5, window['Int8Array'] = _0xb07ax5, window['Uint32Array'] = _0xb07ax5, window['Int32Array'] = _0xb07ax5, window['Uint16Array'] = _0xb07ax5, window['Float32Array'] = _0xb07ax5, window['Float64Array'] = _0xb07ax5
    }();
    var _0xb07ax2a = function(_0xb07ax5, _0xb07ax6) {
            var _0xb07ax7 = 'pdff-ui',
                _0xb07ax8 = 'pdff-ui-wrapper',
                _0xb07ax9 = _0xb07ax7 + '-btn',
                _0xb07axa = _0xb07ax6['ui'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax7
                }),
                _0xb07axb = _0xb07ax6['options'];
            _0xb07axa['dispose'] = function() {
                _0xb07ax5['find']('.' + _0xb07ax9)['each'](function() {
                    _0xb07ax4(this)['off']()
                }), _0xb07ax17['off'](), _0xb07axe['off'](), _0xb07axf['off'](), _0xb07ax10['off'](), _0xb07ax12['off'](), _0xb07ax13['off'](), _0xb07ax14['off'](), _0xb07ax15['off'](), _0xb07ax18['off'](), _0xb07ax19['off'](), _0xb07ax1e['off'](), _0xb07ax1f['off'](), _0xb07ax21['off'](), _0xb07ax22['off'](), _0xb07ax23['off'](), _0xb07ax24['off'](), _0xb07ax25['off'](), _0xb07ax26['off'](), _0xb07ax27['off'](), _0xb07ax28['off'](), _0xb07ax20['remove'](), _0xb07ax16['remove'](), _0xb07axf['remove'](), _0xb07axe['remove'](), _0xb07ax12['remove'](), _0xb07axa['shareBox'] && (_0xb07axa['shareBox']['dispose'] && _0xb07axa['shareBox']['dispose'](), _0xb07axa['shareBox'] = null), document['removeEventListener']('keyup', _0xb07ax35, !1), window['removeEventListener']('click', _0xb07ax1a, !1), _0xb07axa['update'] = null, _0xb07ax6 = null
            };
            var _0xb07axc = function(_0xb07ax3) {
                    return isNaN(_0xb07ax3) ? _0xb07ax3 = _0xb07ax6['target']['_activePage'] : _0xb07ax3 < 1 ? _0xb07ax3 = 1 : _0xb07ax3 > _0xb07ax6['target']['pageCount'] && (_0xb07ax3 = _0xb07ax6['target']['pageCount']), _0xb07ax3
                },
                _0xb07axe = _0xb07axa['next'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-next ' + _0xb07axb['icons']['next'],
                    title: _0xb07axb['text']['nextPage'],
                    html: '<span>' + _0xb07axb['text']['nextPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['next']()
                }),
                _0xb07axf = _0xb07axa['prev'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-prev ' + _0xb07axb['icons']['prev'],
                    title: _0xb07axb['text']['previousPage'],
                    html: '<span>' + _0xb07axb['text']['previousPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['prev']()
                }),
                _0xb07ax10 = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-play ' + _0xb07axb['icons']['play'],
                    title: _0xb07axb['text']['play'],
                    html: '<span>' + _0xb07axb['text']['play'] + '</span>'
                })['on']('click', function() {
                    var _0xb07ax3 = _0xb07ax4(this);
                    _0xb07ax6['setAutoPlay'](!_0xb07ax3['hasClass'](_0xb07axb['icons']['pause']))
                });
            1 == _0xb07axb['autoPlay'] && (_0xb07axa['play'] = _0xb07ax10, _0xb07ax6['setAutoPlay'](_0xb07axb['autoPlayStart']));
            var _0xb07ax12 = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax8 + ' ' + _0xb07ax7 + '-zoom'
                }),
                _0xb07ax13 = _0xb07axa['zoomIn'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-zoomin ' + _0xb07axb['icons']['zoomin'],
                    title: _0xb07axb['text']['zoomIn'],
                    html: '<span>' + _0xb07axb['text']['zoomIn'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['zoom'](1), _0xb07axa['update'](), _0xb07ax6['target']['startPoint'] && _0xb07ax6['target']['pan'] && _0xb07ax6['target']['pan'](_0xb07ax6['target']['startPoint'])
                }),
                _0xb07ax14 = _0xb07axa['zoomOut'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-zoomout ' + _0xb07axb['icons']['zoomout'],
                    title: _0xb07axb['text']['zoomOut'],
                    html: '<span>' + _0xb07axb['text']['zoomOut'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['zoom'](-1), _0xb07axa['update'](), _0xb07ax6['target']['startPoint'] && _0xb07ax6['target']['pan'] && _0xb07ax6['target']['pan'](_0xb07ax6['target']['startPoint'])
                });
            _0xb07ax12['append'](_0xb07ax13)['append'](_0xb07ax14);
            var _0xb07ax15 = _0xb07axa['pageNumber'] = _0xb07ax4(_0xb07ax11['div'], {
                class: _0xb07ax9 + ' ' + _0xb07ax7 + '-page'
            })['on']('change', function() {
                var _0xb07ax3 = parseInt(_0xb07axa['pageInput']['val'](), 10);
                _0xb07ax3 = _0xb07axc(_0xb07ax3), _0xb07ax6['gotoPage'](_0xb07ax3)
            })['on']('keyup', function(_0xb07ax3) {
                if (13 == _0xb07ax3['keyCode']) {
                    var _0xb07ax4 = parseInt(_0xb07axa['pageInput']['val'](), 10);
                    (_0xb07ax4 = _0xb07axc(_0xb07ax4)) !== _0xb07axc(_0xb07ax6['target']['_activePage'] || _0xb07ax6['_activePage']) && _0xb07ax6['gotoPage'](_0xb07ax4)
                }
            });
            _0xb07axa['pageInput'] = _0xb07ax4('<input id="df_book_page_number" type="text"/>')['appendTo'](_0xb07ax15), _0xb07axa['pageLabel'] = _0xb07ax4('<label for="df_book_page_number"/>')['appendTo'](_0xb07ax15);
            var _0xb07ax16 = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax8 + ' ' + _0xb07ax7 + '-size'
                }),
                _0xb07ax17 = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-help ' + _0xb07axb['icons']['help'],
                    title: _0xb07axb['text']['toggleHelp'],
                    html: '<span>' + _0xb07axb['text']['toggleHelp'] + '</span>'
                })['on']('click', function() {}),
                _0xb07ax18 = _0xb07axa['sound'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-sound ' + _0xb07axb['icons']['sound'],
                    title: _0xb07axb['text']['toggleSound'],
                    html: '<span>' + _0xb07axb['text']['toggleSound'] + '</span>'
                })['on']('click', function() {
                    _0xb07axb['enableSound'] = !_0xb07axb['enableSound'], _0xb07axa['updateSound']()
                });
            _0xb07axa['updateSound'] = function() {
                0 == _0xb07axb['enableSound'] || 'false' == _0xb07axb['enableSound'] ? _0xb07ax18['addClass']('disabled') : _0xb07ax18['removeClass']('disabled')
            }, _0xb07axa['updateSound']();
            var _0xb07ax19 = _0xb07axa['more'] = _0xb07ax4(_0xb07ax11['div'], {
                class: _0xb07ax9 + ' ' + _0xb07ax7 + '-more ' + _0xb07axb['icons']['more']
            })['on']('click', function(_0xb07ax3) {
                _0xb07ax19['hasClass']('pdff-active') || (_0xb07ax4(this)['addClass']('pdff-active'), _0xb07ax3['stopPropagation']())
            });

            function _0xb07ax1a(_0xb07ax3) {
                _0xb07ax19['removeClass']('pdff-active')
            }
            window['addEventListener']('click', _0xb07ax1a, !1);
            var _0xb07ax1b = _0xb07ax4(_0xb07ax11['div'], {
                class: 'more-container'
            });
            if (_0xb07ax19['append'](_0xb07ax1b), 'string' == typeof _0xb07axb['source'] && 1 == _0xb07axb['downloadEnable']) {
                var _0xb07ax1d = _0xb07ax9 + ' ' + _0xb07ax7 + '-download ' + _0xb07axb['icons']['download'];
                (_0xb07axa['download'] = _0xb07ax4('<a download target="_blank" class="' + _0xb07ax1d + '"><span>' + _0xb07axb['text']['downloadPDFFile'] + '</span></a>'))['attr']('href', _0xb07axb['source'])['attr']('title', _0xb07axb['text']['downloadPDFFile'])
            };
            _0xb07axd['hasFullscreenEnabled']() || _0xb07ax5['addClass']('pdff-custom-fullscreen'), _0xb07axa['switchFullscreen'] = function() {
                _0xb07axd['getFullscreenElement']();
                var _0xb07ax3 = _0xb07ax6['container'][0];
                1 != _0xb07axa['isFullscreen'] ? (_0xb07ax6['container']['addClass']('pdff-fullscreen'), _0xb07ax3['requestFullscreen'] ? _0xb07ax3['requestFullscreen']() : _0xb07ax3['msRequestFullscreen'] ? _0xb07ax3['msRequestFullscreen']() : _0xb07ax3['mozRequestFullScreen'] ? _0xb07ax3['mozRequestFullScreen']() : _0xb07ax3['webkitRequestFullscreen'] && _0xb07ax3['webkitRequestFullscreen'](), _0xb07axa['isFullscreen'] = !0) : (_0xb07ax6['container']['removeClass']('pdff-fullscreen'), _0xb07axa['isFullscreen'] = !1, document['exitFullscreen'] ? document['exitFullscreen']() : document['msExitFullscreen'] ? document['msExitFullscreen']() : document['mozCancelFullScreen'] ? document['mozCancelFullScreen']() : document['webkitExitFullscreen'] && document['webkitExitFullscreen']()), _0xb07axd['hasFullscreenEnabled']() || setTimeout(function() {
                    _0xb07ax6['resize']()
                }, 50)
            };
            var _0xb07ax1e = _0xb07axa['fullScreen'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-fullscreen ' + _0xb07axb['icons']['fullscreen'],
                    title: _0xb07axb['text']['toggleFullscreen'],
                    html: '<span>' + _0xb07axb['text']['toggleFullscreen'] + '</span>'
                })['on']('click', _0xb07axa['switchFullscreen']),
                _0xb07ax1f = _0xb07axa['fit'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-fit ' + _0xb07axb['icons']['fitscreen']
                })['on']('click', function() {
                    _0xb07ax4(this)['toggleClass']('pdff-button-fit-active')
                });
            _0xb07ax16['append'](_0xb07ax1e);
            var _0xb07ax20 = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax8 + ' ' + _0xb07ax7 + '-controls'
                }),
                _0xb07ax21 = (_0xb07axa['shareBox'] = new _0xb07ax3.Share(_0xb07ax5, _0xb07axb), _0xb07axa['share'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-share ' + _0xb07axb['icons']['share'],
                    title: _0xb07axb['text']['share'],
                    html: '<span>' + _0xb07axb['text']['share'] + '</span>'
                })['on']('click', function(_0xb07ax3) {
                    1 == _0xb07axa['shareBox']['isOpen'] ? _0xb07axa['shareBox']['close']() : (_0xb07axa['shareBox']['update'](_0xb07ax6['getURLHash']()), _0xb07axa['shareBox']['show']())
                })),
                _0xb07ax22 = _0xb07axa['startPage'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-start ' + _0xb07axb['icons']['start'],
                    title: _0xb07axb['text']['gotoFirstPage'],
                    html: '<span>' + _0xb07axb['text']['gotoFirstPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['start']()
                }),
                _0xb07ax23 = _0xb07axa['endPage'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-end ' + _0xb07axb['icons']['end'],
                    title: _0xb07axb['text']['gotoLastPage'],
                    html: '<span>' + _0xb07axb['text']['gotoLastPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['end']()
                }),
                _0xb07ax24 = _0xb07axa['pageMode'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-pagemode ' + _0xb07axb['icons']['singlepage'],
                    html: '<span>' + _0xb07axb['text']['singlePageMode'] + '</span>'
                })['on']('click', function() {
                    var _0xb07ax3 = _0xb07ax4(this);
                    _0xb07ax6['setPageMode'](!_0xb07ax3['hasClass'](_0xb07axb['icons']['doublepage']))
                });
            _0xb07ax6['setPageMode'](_0xb07ax6['target']['pageMode'] == _0xb07ax3['PAGE_MODE']['SINGLE']);
            for (var _0xb07ax25 = _0xb07axa['altPrev'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-prev ' + _0xb07ax7 + '-alt ' + _0xb07axb['icons']['prev'],
                    title: _0xb07axb['text']['previousPage'],
                    html: '<span>' + _0xb07axb['text']['previousPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['prev']()
                }), _0xb07ax26 = _0xb07axa['altNext'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-next ' + _0xb07ax7 + '-alt ' + _0xb07axb['icons']['next'],
                    title: _0xb07axb['text']['nextPage'],
                    html: '<span>' + _0xb07axb['text']['nextPage'] + '</span>'
                })['on']('click', function() {
                    _0xb07ax6['next']()
                }), _0xb07ax27 = _0xb07axa['thumbnail'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-thumbnail ' + _0xb07axb['icons']['thumbnail'],
                    title: _0xb07axb['text']['toggleThumbnails'],
                    html: '<span>' + _0xb07axb['text']['toggleThumbnails'] + '</span>'
                })['on']('click', function() {
                    var _0xb07ax3 = _0xb07ax4(this);
                    _0xb07ax6['target']['thumbContainer'] ? (_0xb07ax6['target']['thumbContainer']['toggleClass']('pdff-sidemenu-visible'), _0xb07ax3['toggleClass']('pdff-active')) : (_0xb07ax6['contentProvider']['initThumbs'](), _0xb07ax3['toggleClass']('pdff-active'));
                    _0xb07ax3['hasClass']('pdff-active') && _0xb07ax3['siblings']('.pdff-active')['trigger']('click'), _0xb07axa['update'](!0)
                }), _0xb07ax28 = _0xb07axa['outline'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: _0xb07ax9 + ' ' + _0xb07ax7 + '-outline ' + _0xb07axb['icons']['outline'],
                    title: _0xb07axb['text']['toggleOutline'],
                    html: '<span>' + _0xb07axb['text']['toggleOutline'] + '</span>'
                })['on']('click', function() {
                    var _0xb07ax3 = _0xb07ax4(this);
                    if (_0xb07ax6['target']['outlineContainer']) {
                        var _0xb07ax5 = _0xb07ax6['target']['outlineContainer'];
                        _0xb07ax3['toggleClass']('pdff-active'), _0xb07ax5['toggleClass']('pdff-sidemenu-visible'), _0xb07ax3['hasClass']('pdff-active') && _0xb07ax3['siblings']('.pdff-active')['trigger']('click'), _0xb07axa['update'](!0)
                    }
                }), _0xb07ax29 = _0xb07axb['allControls']['replace'](/ /g, '')['split'](','), _0xb07ax2a = ',' + _0xb07axb['moreControls']['replace'](/ /g, '') + ',', _0xb07ax2b = ',' + _0xb07axb['hideControls']['replace'](/ /g, '') + ',', _0xb07ax2c = (_0xb07ax2a['split'](','), 0); _0xb07ax2c < _0xb07ax29['length']; _0xb07ax2c++) {
                var _0xb07ax2d = _0xb07ax29[_0xb07ax2c];
                if (_0xb07ax2b['indexOf'](',' + _0xb07ax2d + ',') < 0) {
                    var _0xb07ax2e = _0xb07axa[_0xb07ax2d];
                    null != _0xb07ax2e && (_0xb07ax2a['indexOf'](',' + _0xb07ax2d + ',') > -1 && 'more' !== _0xb07ax2d && 'pageNumber' !== _0xb07ax2d ? _0xb07ax1b['append'](_0xb07ax2e) : _0xb07ax20['append'](_0xb07ax2e))
                }
            };
            _0xb07ax5['append'](_0xb07ax20)['append'](_0xb07axf)['append'](_0xb07axe)['append'](_0xb07ax12);
            var _0xb07ax2f = 16,
                _0xb07ax30 = 17,
                _0xb07ax31 = 18,
                _0xb07ax32 = 39,
                _0xb07ax33 = 37,
                _0xb07ax34 = 27;

            function _0xb07ax35(_0xb07ax3) {
                switch (_0xb07ax3['keyCode']) {
                    case _0xb07ax34:
                        1 == _0xb07axa['isFullscreen'] && _0xb07axa['fullScreen']['trigger']('click');
                        break;
                    case _0xb07ax2f:
                        !1;
                        break;
                    case _0xb07ax30:
                        !1;
                        break;
                    case _0xb07ax31:
                        !1;
                        break;
                    case _0xb07ax33:
                        _0xb07ax6['prev']();
                        break;
                    case _0xb07ax32:
                        _0xb07ax6['next']()
                }
            }
            document['addEventListener']('keyup', _0xb07ax35, !1), _0xb07axa['update'] = function(_0xb07ax4) {
                _0xb07ax1c('ui update');
                var _0xb07ax7 = _0xb07ax6['target'],
                    _0xb07ax8 = _0xb07axc(_0xb07ax7['_activePage'] || _0xb07ax6['_activePage']),
                    _0xb07ax9 = _0xb07ax7['pageCount'] || _0xb07ax6['pageCount'],
                    _0xb07axb = _0xb07ax7['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                    _0xb07axd = 1 == _0xb07ax8 || 0 == _0xb07ax8,
                    _0xb07axe = _0xb07ax8 == _0xb07ax9;
                _0xb07axa['next']['show'](), _0xb07axa['prev']['show'](), _0xb07axa['altNext']['removeClass']('disabled'), _0xb07axa['altPrev']['removeClass']('disabled'), (_0xb07axd && !_0xb07axb || _0xb07axe && _0xb07axb) && (_0xb07axa['prev']['hide'](), _0xb07axa['altPrev']['addClass']('disabled')), (_0xb07axe && !_0xb07axb || _0xb07axd && _0xb07axb) && (_0xb07axa['next']['hide'](), _0xb07axa['altNext']['addClass']('disabled')), _0xb07axa['pageInput']['val'](_0xb07ax8), _0xb07axa['pageLabel']['html'](_0xb07ax8 + '/' + _0xb07ax9), _0xb07ax5['find']('.pdff-sidemenu-visible')['length'] > 0 ? _0xb07ax5['addClass']('pdff-sidemenu-open') : _0xb07ax5['removeClass']('pdff-sidemenu-open'), 1 == _0xb07ax4 && _0xb07ax6['resize'](), _0xb07ax7['contentProvider']['zoomScale'] == _0xb07ax7['contentProvider']['maxZoom'] ? _0xb07axa['zoomIn']['addClass']('disabled') : _0xb07axa['zoomIn']['removeClass']('disabled'), 1 == _0xb07ax7['contentProvider']['zoomScale'] ? _0xb07axa['zoomOut']['addClass']('disabled') : _0xb07axa['zoomOut']['removeClass']('disabled')
            }, null != _0xb07ax6['target'] && (_0xb07ax6['target']['ui'] = _0xb07axa), null != _0xb07axb['onCreateUI'] && _0xb07axb['onCreateUI'](_0xb07ax6)
        },
        _0xb07ax2b = null;

    function _0xb07ax2c() {
        _0xb07ax2b = function(_0xb07ax3) {
            function _0xb07ax5(_0xb07ax5) {
                _0xb07ax5 = _0xb07ax5 || {};
                var _0xb07ax6 = this;
                _0xb07ax3['call'](this, _0xb07ax5), _0xb07ax6['options'] = _0xb07ax5, _0xb07ax6['canvas'] = _0xb07ax4(_0xb07ax6['renderer']['domElement'])['addClass']('pdff-3dcanvas'), _0xb07ax6['container'] = _0xb07ax5['container'], _0xb07ax6['container']['append'](_0xb07ax6['canvas']), _0xb07ax6['type'] = 'PreviewStage', _0xb07ax6['mouse'] = new THREE['Vector2'], _0xb07ax6['raycaster'] = new THREE['Raycaster'], _0xb07ax6['camera']['position']['set'](0, 20, 600), _0xb07ax6['camera']['lookAt'](new THREE.Vector3(0, 0, 0)), _0xb07ax6['spotLight']['position']['set'](-220, 330, 550), _0xb07ax6['spotLight']['castShadow'] = !_0xb07ax25 && _0xb07ax5['webglShadow'], _0xb07ax6['spotLight']['shadow'] && (_0xb07ax6['spotLight']['shadow']['bias'] = -8e-4), _0xb07ax6['spotLight']['intensity'] = _0xb07ax12(_0xb07ax5['spotLightIntensity'], _0xb07ax9['spotLightIntensity']), _0xb07ax6['ambientLight']['color'] = new THREE.Color(_0xb07ax12(_0xb07ax5['ambientLightColor'], _0xb07ax9['ambientLightColor'])), _0xb07ax6['ambientLight']['intensity'] = _0xb07ax12(_0xb07ax5['ambientLightIntensity'], _0xb07ax9['ambientLightIntensity']);
                var _0xb07ax7 = new THREE['ShadowMaterial'];
                _0xb07ax7['opacity'] = _0xb07ax12(_0xb07ax5['shadowOpacity'], _0xb07ax9['shadowOpacity']), _0xb07ax6['ground']['material'] = _0xb07ax7, _0xb07ax6['ground']['position']['z'] = -2, _0xb07ax6['orbitControl']['maxAzimuthAngle'] = 0, _0xb07ax6['orbitControl']['minAzimuthAngle'] = 0, _0xb07ax6['orbitControl']['minPolarAngle'] = 1.57, _0xb07ax6['orbitControl']['maxPolarAngle'] = 1.57, _0xb07ax6['orbitControl']['mouseButtons']['ORBIT'] = THREE['MOUSE']['RIGHT'], _0xb07ax6['orbitControl']['mouseButtons']['PAN'] = -1, _0xb07ax6['orbitControl']['maxDistance'] = 5e3, _0xb07ax6['orbitControl']['minDistance'] = 50, _0xb07ax6['orbitControl']['noZoom'] = !0, _0xb07ax6['selectiveRendering'] = !0, _0xb07ax6['orbitControl']['zoomSpeed'] = 5, _0xb07ax6['orbitControl']['keyPanSpeed'] = 0, _0xb07ax6['orbitControl']['center']['set'](0, 0, 0), _0xb07ax6['orbitControl']['update'](), _0xb07ax6['swipe_threshold'] = _0xb07ax25 ? 15 : 20;
                var _0xb07ax8 = _0xb07ax6['cssRenderer'] = new THREE['CSS3DRenderer'];
                _0xb07ax4(_0xb07ax8['domElement'])['css']({
                    position: 'absolute',
                    top: 0,
                    pointerEvents: 'none'
                })['addClass']('pdff-3dcanvas pdff-csscanvas'), _0xb07ax6['container'][0]['appendChild'](_0xb07ax8['domElement']);
                var _0xb07axa = _0xb07ax6['cssScene'] = new THREE['Scene'],
                    _0xb07axb = document['createElement']('div');
                _0xb07axb['className'] = 'pdff-page-content pdff-page-content-left';
                var _0xb07axc = document['createElement']('div');
                _0xb07axc['className'] = 'pdff-page-content pdff-page-content-right';
                var _0xb07axe = _0xb07axa['divLeft'] = new THREE.CSS3DObject(_0xb07axb),
                    _0xb07axf = _0xb07axa['divRight'] = new THREE.CSS3DObject(_0xb07axc);

                function _0xb07ax11() {
                    _0xb07ax6['renderRequestPending'] = !0
                }
                _0xb07axa['add'](_0xb07axe), _0xb07axa['add'](_0xb07axf), _0xb07ax6['resizeCallback'] = function() {
                    _0xb07ax8['setSize'](_0xb07ax6['canvas']['width'](), _0xb07ax6['canvas']['height']())
                }, window['addEventListener'](_0xb07ax10['move'], _0xb07ax11, !1), window['addEventListener']('keyup', _0xb07ax11, !1), _0xb07ax6['dispose'] = function() {
                    _0xb07ax6['clearChild'](), _0xb07ax6['render'](), window['removeEventListener'](_0xb07ax10['move'], _0xb07ax11, !1), 1 == _0xb07ax6['options']['scrollWheel'] && (_0xb07ax6['renderer']['domElement']['removeEventListener']('mousewheel', _0xb07ax13, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('DOMMouseScroll', _0xb07ax13, !1)), window['removeEventListener']('keyup', _0xb07ax11, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('mousemove', _0xb07ax14, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('touchmove', _0xb07ax14, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('mousedown', _0xb07ax15, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('touchstart', _0xb07ax15, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('mouseup', _0xb07ax16, !1), _0xb07ax6['renderer']['domElement']['removeEventListener']('touchend', _0xb07ax16, !1), _0xb07ax6['canvas']['remove'](), _0xb07ax8['domElement']['parentNode']['removeChild'](_0xb07ax8['domElement']), _0xb07ax8 = null, _0xb07ax6['renderCallback'] = null, _0xb07ax6['renderCallback'] = null, _0xb07ax6['orbitControl']['dispose'](), _0xb07ax6['orbitControl'] = null, _0xb07ax6['renderer']['dispose'](), _0xb07ax6['cancelRAF']()
                }, _0xb07ax6['renderCallback'] = function() {
                    TWEEN['getAll']()['length'] > 0 && (_0xb07ax6['renderRequestPending'] = !0), TWEEN['update'](), _0xb07ax8['render'](_0xb07axa, _0xb07ax6['camera'])
                };
                var _0xb07ax13 = function(_0xb07ax3) {
                        var _0xb07ax4 = 0;
                        if (null != _0xb07ax3['wheelDelta'] ? _0xb07ax4 = _0xb07ax3['wheelDelta'] : null != _0xb07ax3['detail'] && (_0xb07ax4 = -_0xb07ax3['detail']), _0xb07ax4) {
                            var _0xb07ax5 = _0xb07ax6['previewObject']['contentProvider']['zoomScale'];
                            (_0xb07ax4 > 0 && 1 == _0xb07ax5 || _0xb07ax4 < 0 && _0xb07ax5 > 1) && _0xb07ax3['preventDefault'](), _0xb07ax6['previewObject']['zoom'](_0xb07ax4 > 0 ? 1 : -1)
                        };
                        _0xb07ax11()
                    },
                    _0xb07ax14 = function(_0xb07ax3) {
                        if (_0xb07ax6['renderRequestPending'] = !0, _0xb07ax3 = _0xb07ax21(_0xb07ax3), _0xb07ax6['isMouseDown'] && 0 != _0xb07ax3['movementX'] && 0 != _0xb07ax3['movementY'] && (_0xb07ax6['isMouseMoving'] = !0), null != _0xb07ax3['touches'] && 2 == _0xb07ax3['touches']['length'] && null != _0xb07ax6['startTouches']) {
                            _0xb07ax6['zoomDirty'] = !0;
                            var _0xb07ax4 = _0xb07axd['getVectorAvg'](_0xb07axd['getTouches'](_0xb07ax3, _0xb07ax6['container']['offset']())),
                                _0xb07ax5 = _0xb07axd['calculateScale'](_0xb07ax6['startTouches'], _0xb07axd['getTouches'](_0xb07ax3));
                            _0xb07ax6['lastScale'], _0xb07ax6['previewObject']['contentProvider']['zoomScale'], _0xb07ax4['x'], _0xb07ax4['y'];
                            return _0xb07ax6['camera']['position']['z'] = _0xb07ax6['originalZ'] / _0xb07ax5, _0xb07ax6['lastScale'] = _0xb07ax5, _0xb07ax6['lastZoomCenter'] = _0xb07ax4, void(_0xb07ax3['preventDefault']())
                        };
                        if (1 == _0xb07ax6['isMouseDown'] && 1 == _0xb07ax6['previewObject']['contentProvider']['zoomScale']) {
                            var _0xb07ax7 = _0xb07ax3['pageX'] - _0xb07ax6['lastPos'];
                            performance['now'](), _0xb07ax6['lastTime'];
                            Math['abs'](_0xb07ax7) > _0xb07ax6['swipe_threshold'] && (_0xb07ax7 < 0 ? _0xb07ax6['target']['next']() : _0xb07ax6['target']['prev'](), _0xb07ax3['preventDefault'](), _0xb07ax6['isMouseDown'] = !1), _0xb07ax6['lastPos'] = _0xb07ax3['pageX'], _0xb07ax6['lastTime'] = performance['now']()
                        }
                    },
                    _0xb07ax15 = function(_0xb07ax3) {
                        null != (_0xb07ax3 = _0xb07ax21(_0xb07ax3))['touches'] && 2 == _0xb07ax3['touches']['length'] && null == _0xb07ax6['startTouches'] && (_0xb07ax6['startTouches'] = _0xb07axd['getTouches'](_0xb07ax3), _0xb07ax6['lastScale'] = 1, _0xb07ax6['originalZ'] = 1 * _0xb07ax6['camera']['position']['z']), document['activeElement']['blur'](), _0xb07ax6['mouseValue'] = _0xb07ax3['pageX'] + ',' + _0xb07ax3['pageY'], _0xb07ax6['isMouseMoving'] = !1, _0xb07ax6['isMouseDown'] = !0, _0xb07ax6['lastPos'] = _0xb07ax3['pageX'], _0xb07ax6['lastTime'] = performance['now']()
                    },
                    _0xb07ax16 = function(_0xb07ax3) {
                        if (null != (_0xb07ax3 = _0xb07ax21(_0xb07ax3))['touches'] && 0 == _0xb07ax3['touches']['length']) {
                            _0xb07ax6['previewObject']['contentProvider']['zoomScale'];
                            1 == _0xb07ax6['zoomDirty'] && (_0xb07ax6['previewObject']['contentProvider']['zoomScale'] = _0xb07axd['limitAt'](_0xb07ax6['previewObject']['contentProvider']['zoomScale'] * _0xb07ax6['lastScale'], 1, _0xb07ax6['previewObject']['contentProvider']['maxZoom']), _0xb07ax6['previewObject']['zoomValue'] = 1 * _0xb07ax6['previewObject']['contentProvider']['zoomScale'], _0xb07ax6['previewObject']['resize'](), _0xb07ax6['zoomDirty'] = !1), _0xb07ax6['lastScale'] = null, _0xb07ax6['startTouches'] = null
                        };
                        null != _0xb07ax3['touches'] && _0xb07ax3['touches']['length'] > 1 || function(_0xb07ax3) {
                            if (_0xb07ax6['isMouseDown'] = !1, 0 !== _0xb07ax3['button']) {
                                return this
                            };
                            var _0xb07ax5 = _0xb07ax3['pageX'] + ',' + _0xb07ax3['pageY'];
                            if (_0xb07ax6['isMouseMoving']) {
                                ;
                            } else {
                                if (_0xb07ax5 == _0xb07ax6['mouseValue']) {
                                    _0xb07ax3 = _0xb07ax3 || window['event'], _0xb07ax3 = _0xb07ax4['event']['fix'](_0xb07ax3);
                                    var _0xb07ax7 = _0xb07ax6['mouse'],
                                        _0xb07ax8 = _0xb07ax6['raycaster'];
                                    _0xb07ax7['x'] = _0xb07ax3['offsetX'] / _0xb07ax6['canvas']['innerWidth']() * 2 - 1, _0xb07ax7['y'] = 1 - _0xb07ax3['offsetY'] / _0xb07ax6['canvas']['innerHeight']() * 2, _0xb07ax8['setFromCamera'](_0xb07ax7, _0xb07ax6['camera']);
                                    var _0xb07ax9 = _0xb07ax8['intersectObjects'](_0xb07ax6['target'] instanceof MOCKUP['Bundle'] ? _0xb07ax6['target']['children'] : [_0xb07ax6['target']], !0);
                                    if (_0xb07ax9['length'] > 0) {
                                        var _0xb07axa, _0xb07axb = 0;
                                        do {
                                            _0xb07axa = null != _0xb07ax9[_0xb07axb] ? _0xb07ax9[_0xb07axb]['object'] : null, _0xb07axb++
                                        } while ((_0xb07axa instanceof THREE['BoxHelper'] || !(_0xb07axa instanceof MOCKUP['Paper']) || 1 == _0xb07axa['isFlipping']) && _0xb07axb < _0xb07ax9['length']);;
                                        null != _0xb07axa['userData']['object'] || (_0xb07axa['angles'][1] > 90 ? 1 != _0xb07axa['isEdge'] && _0xb07ax6['target']['next']() : 1 != _0xb07axa['isEdge'] && _0xb07ax6['target']['prev']())
                                    }
                                }
                            }
                        }(_0xb07ax3)
                    };
                return _0xb07ax6['renderer']['domElement']['addEventListener']('mousemove', _0xb07ax14, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('touchmove', _0xb07ax14, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('mousedown', _0xb07ax15, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('touchstart', _0xb07ax15, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('mouseup', _0xb07ax16, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('touchend', _0xb07ax16, !1), 1 == _0xb07ax6['options']['scrollWheel'] && (_0xb07ax6['renderer']['domElement']['addEventListener']('mousewheel', _0xb07ax13, !1), _0xb07ax6['renderer']['domElement']['addEventListener']('DOMMouseScroll', _0xb07ax13, !1)), _0xb07ax4(_0xb07ax6['renderer']['domElement'])['css']({
                    display: 'block'
                }), _0xb07ax4(window)['trigger']('resize'), this
            }
            return _0xb07ax29(_0xb07ax5, _0xb07ax3), _0xb07ax5['prototype']['width'] = function() {
                return this['container']['width']()
            }, _0xb07ax5['prototype']['height'] = function() {
                return this['container']['height']()
            }, _0xb07ax5
        }(MOCKUP.Stage), MOCKUP['PreviewStage'] = _0xb07ax2b;
        var _0xb07ax5 = function(_0xb07ax4) {
            function _0xb07ax5(_0xb07ax3, _0xb07ax5) {
                (_0xb07ax3 = _0xb07ax3 || {})['folds'] = 1, _0xb07ax4['call'](this, _0xb07ax3, _0xb07ax5), this['angle'] = 0, this['isFlipping'] = !1, this['material']['materials'][5]['transparent'] = !0, this['material']['materials'][4]['transparent'] = !0, this['type'] = 'BookPaper'
            }
            return _0xb07ax29(_0xb07ax5, _0xb07ax4), _0xb07ax5['prototype']['tween'] = function(_0xb07ax4, _0xb07ax5) {
                var _0xb07ax6 = this;
                _0xb07ax6['originalStiff'] = _0xb07ax6['stiffness'];
                var _0xb07ax7 = _0xb07ax6['newStiffness'],
                    _0xb07ax8 = _0xb07ax23(_0xb07ax6['parent']),
                    _0xb07ax9 = _0xb07ax5 - _0xb07ax4,
                    _0xb07axa = _0xb07ax4 > 90,
                    _0xb07axb = _0xb07ax6['parent']['direction'] == _0xb07ax3['DIRECTION']['RTL'];
                _0xb07ax6['init'] = {
                    angle: _0xb07ax4,
                    angle2: _0xb07ax4 < 90 ? 0 : 180,
                    stiff: _0xb07ax6['originalStiff'],
                    index: _0xb07axa && !_0xb07axb || !_0xb07axa && _0xb07axb ? 1 : 0
                }, _0xb07ax6['first'] = {
                    angle: _0xb07ax4 + _0xb07ax9 / 4,
                    angle2: 90,
                    stiff: _0xb07ax6['originalStiff'],
                    index: _0xb07axa && !_0xb07axb || !_0xb07axa && _0xb07axb ? 1 : 0.25
                }, _0xb07ax6['mid'] = {
                    angle: _0xb07ax4 + 2 * _0xb07ax9 / 4,
                    angle2: _0xb07ax4 < 90 ? 135 : 45,
                    stiff: _0xb07ax6['newStiffness'],
                    index: 0.5
                }, _0xb07ax6['mid2'] = {
                    angle: _0xb07ax4 + 3 * _0xb07ax9 / 4,
                    angle2: _0xb07ax4 < 90 ? 180 : 0,
                    stiff: _0xb07ax6['newStiffness'],
                    index: _0xb07axa && !_0xb07axb || !_0xb07axa && _0xb07axb ? 0.25 : 1
                }, _0xb07ax6['end'] = {
                    angle: _0xb07ax5,
                    angle2: _0xb07ax4 < 90 ? 180 : 0,
                    stiff: _0xb07ax6['newStiffness'],
                    index: _0xb07axa && !_0xb07axb || !_0xb07axa && _0xb07axb ? 0 : 1
                }, _0xb07ax6['isFlipping'] = !0;
                _0xb07ax8 && (!_0xb07axa && !_0xb07axb || _0xb07axa && _0xb07axb) && (_0xb07ax6['material']['materials'][5]['opacity'] = _0xb07ax6['material']['materials'][4]['opacity'] = 0, _0xb07ax6['castShadow'] = !1), _0xb07ax6['currentTween'] = new TWEEN.Tween(_0xb07ax6['init'])['to']({
                    angle: [_0xb07ax6['first']['angle'], _0xb07ax6['mid']['angle'], _0xb07ax6['mid2']['angle'], _0xb07ax6['end']['angle']],
                    angle2: [_0xb07ax6['first']['angle2'], _0xb07ax6['mid']['angle2'], _0xb07ax6['mid2']['angle2'], _0xb07ax6['end']['angle2']],
                    stiff: [_0xb07ax6['first']['stiff'], _0xb07ax6['mid']['stiff'], _0xb07ax6['mid2']['stiff'], _0xb07ax6['end']['stiff']],
                    index: [_0xb07ax6['first']['index'], _0xb07ax6['mid']['index'], _0xb07ax6['mid2']['index'], _0xb07ax6['end']['index']]
                }, _0xb07ax6['parent']['duration'])['onUpdate'](function(_0xb07ax3) {
                    var _0xb07ax4;
                    _0xb07ax4 = this, _0xb07ax6['angles'][1] = _0xb07ax4['angle'], _0xb07ax6['angles'][4] = _0xb07ax6['isHard'] ? _0xb07ax4['angle'] : _0xb07ax4['angle2'], 1 == _0xb07ax6['isHard'] ? _0xb07ax6['stiffness'] = 0 : (_0xb07ax6['stiffness'] = _0xb07ax4['stiff'] / (_0xb07ax7 + 1e-5) * (_0xb07ax6['newStiffness'] + 1e-5), _0xb07ax6['stiffness'] = isNaN(_0xb07ax6['stiffness']) ? 0 : _0xb07ax4['stiff']), _0xb07ax8 && (_0xb07ax6['material']['materials'][5]['opacity'] = _0xb07ax6['material']['materials'][4]['opacity'] = _0xb07ax4['index'], _0xb07ax6['castShadow'] = _0xb07ax4['index'] > 0.5), _0xb07ax6['updateAngle'](!0)
                })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](function(_0xb07ax3) {
                    _0xb07ax6['stiffness'] = _0xb07ax6['newStiffness'], _0xb07ax6['updateAngle'](), _0xb07ax6['material']['materials'][5]['opacity'] = _0xb07ax6['material']['materials'][4]['opacity'] = 1, _0xb07ax6['castShadow'] = !0, _0xb07ax6['isFlipping'] = !1, _0xb07ax6['parent'] && _0xb07ax6['parent']['refresh'] && _0xb07ax6['parent']['refresh']()
                })['start']()
            }, _0xb07ax5
        }(MOCKUP.FlexBoxPaper);
        MOCKUP['BookPaper'] = _0xb07ax5;
        var _0xb07ax6 = function(_0xb07ax4) {
            function _0xb07ax5(_0xb07ax5, _0xb07ax6) {
                (_0xb07ax5 = _0xb07ax5 || {})['segments'] = _0xb07ax5['segments'] || 50, this['pageCount'] = _0xb07ax5['pageCount'], this['height'] = _0xb07ax5['height'], this['width'] = _0xb07ax5['width'], this['pageCount'] = 1 == this['pageCount'] ? this['pageCount'] : 2 * Math['ceil'](this['pageCount'] / 2), this['direction'] = _0xb07ax5['direction'] || _0xb07ax3['DIRECTION']['LTR'], this['startPage'] = 1, this['endPage'] = this['pageCount'], this['stackCount'] = _0xb07ax5['stackCount'] || 6, this['materials'] = [], _0xb07ax4['call'](this, _0xb07ax5, _0xb07ax6), this['angles'] = [0, 0, 0, 0, 0, 0], this['stiffness'] = null == _0xb07ax5['stiffness'] ? 1.5 : _0xb07ax5['stiffness'], this['hardConfig'] = _0xb07ax5['hard'], this['_activePage'] = _0xb07ax5['openPage'] || this['startPage'], this['createStack'](_0xb07ax5), this['pageMode'] = _0xb07ax5['pageMode'] || (_0xb07ax25 || this['pageCount'] <= 2 ? _0xb07ax3['PAGE_MODE']['SINGLE'] : _0xb07ax3['PAGE_MODE']['DOUBLE']), this['singlePageMode'] = _0xb07ax5['singlePageMode'] || (_0xb07ax25 ? _0xb07ax3['SINGLE_PAGE_MODE']['BOOKLET'] : _0xb07ax3['SINGLE_PAGE_MODE']['ZOOM']), this['type'] = 'Book'
            }
            return _0xb07ax29(_0xb07ax5, _0xb07ax4), _0xb07ax5['prototype']['getPageByNumber'] = function(_0xb07ax3) {
                var _0xb07ax4 = _0xb07ax23(this) ? _0xb07ax24(this) ? _0xb07ax3 + 1 : _0xb07ax3 : Math['floor']((_0xb07ax3 - 1) / 2);
                return this['getObjectByName'](_0xb07ax4.toString())
            }, _0xb07ax5['prototype']['isPageHard'] = function(_0xb07ax3) {
                return _0xb07axd['isHardPage'](this['hardConfig'], _0xb07ax3, this['pageCount'])
            }, _0xb07ax5['prototype']['activePage'] = function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['_activePage']
                };
                this['gotoPage'](_0xb07ax3)
            }, _0xb07ax5['prototype']['gotoPage'] = function(_0xb07ax3) {
                _0xb07ax3 = parseInt(_0xb07ax3, 10), this['_activePage'] = _0xb07ax3, 1 == this['autoPlay'] && this['previewObject']['setAutoPlay'](this['autoPlay']), this['updatePage'](_0xb07ax3), this && this['thumblist'] && this['thumblist']['review'] && this['thumblist']['review']()
            }, _0xb07ax5['prototype']['moveBy'] = function(_0xb07ax3) {
                var _0xb07ax4 = this['_activePage'] + _0xb07ax3;
                _0xb07ax4 = _0xb07ax18(_0xb07ax4, this['startPage'], this['endPage']), this['gotoPage'](_0xb07ax4)
            }, _0xb07ax5['prototype']['next'] = function(_0xb07ax4) {
                null == _0xb07ax4 && (_0xb07ax4 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? -this['pageMode'] : this['pageMode']), this['moveBy'](_0xb07ax4)
            }, _0xb07ax5['prototype']['prev'] = function(_0xb07ax4) {
                null == _0xb07ax4 && (_0xb07ax4 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? this['pageMode'] : -this['pageMode']), this['moveBy'](_0xb07ax4)
            }, _0xb07ax5['prototype']['updateAngle'] = function() {
                for (var _0xb07ax3 = this['angles'][1], _0xb07ax4 = this['angles'][4] - _0xb07ax3, _0xb07ax5 = this['stackCount'], _0xb07ax6 = 0; _0xb07ax6 < _0xb07ax5; _0xb07ax6++) {
                    var _0xb07ax7 = this['children'][_0xb07ax6];
                    _0xb07ax7['angles'][1] = _0xb07ax3 + _0xb07ax6 * _0xb07ax4 / (100 * _0xb07ax5), _0xb07ax7['stiffness'] = this['stiffness'], _0xb07ax7['updateAngle']()
                }
            }, _0xb07ax5['prototype']['refresh'] = function() {
                this['updatePage'](this._activePage), null != this['flipCallback'] && this['flipCallback']()
            }, _0xb07ax5['prototype']['updatePage'] = function(_0xb07ax4) {
                var _0xb07ax5 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                    _0xb07ax6 = _0xb07ax23(this),
                    _0xb07ax7 = (_0xb07ax1f(_0xb07ax4), _0xb07ax6 ? 1 : 2);
                _0xb07ax4 = Math['floor'](_0xb07ax4 / _0xb07ax7), _0xb07ax5 && (_0xb07ax4 = this['pageCount'] / _0xb07ax7 - _0xb07ax4);
                var _0xb07ax8 = this['oldBaseNumber'] || 0,
                    _0xb07axa = this['pageCount'] / _0xb07ax7,
                    _0xb07axb = this['stackCount'],
                    _0xb07axc = _0xb07ax6 ? 0 : (0.5 - Math['abs'](_0xb07axa / 2 - _0xb07ax4) / _0xb07axa) / this['stiffness'],
                    _0xb07axd = Math['floor'](_0xb07axb / 2),
                    _0xb07axe = !1;
                _0xb07ax8 > _0xb07ax4 ? (_0xb07axe = !0, this['children'][_0xb07axb - 1]['skipFlip'] = !0, this['children']['unshift'](this['children']['pop']())) : _0xb07ax8 < _0xb07ax4 && (this['children'][0]['skipFlip'] = !0, this['children']['push'](this['children']['shift']()));
                for (var _0xb07axf = 5 / _0xb07axa, _0xb07ax10 = _0xb07axf * _0xb07ax4 / 2, _0xb07ax11 = _0xb07axf * (_0xb07axa - _0xb07ax4) / 2, _0xb07ax12 = _0xb07ax10 < _0xb07ax11 ? _0xb07ax11 : _0xb07ax10, _0xb07ax13 = 0; _0xb07ax13 < _0xb07axb; _0xb07ax13++) {
                    var _0xb07ax14, _0xb07ax15 = this['children'][_0xb07ax13],
                        _0xb07ax16 = (_0xb07ax15['color'], _0xb07ax15['angles'][1]),
                        _0xb07ax17 = _0xb07ax4 - _0xb07axd + _0xb07ax13;
                    _0xb07ax5 && (_0xb07ax17 = _0xb07ax6 ? this['pageCount'] - _0xb07ax17 : Math['floor'](this['pageCount'] / 2) - _0xb07ax17 - 1);
                    var _0xb07ax18 = _0xb07ax15['isHard'] = this['isPageHard'](_0xb07ax17),
                        _0xb07ax19 = _0xb07ax15['name'];
                    _0xb07ax15['isEdge'] = !1, 0 == _0xb07ax13 ? _0xb07ax15['depth'] = _0xb07ax10 < 0.4 ? 0.4 : _0xb07ax10 : _0xb07ax13 == _0xb07axb - 1 ? _0xb07ax15['depth'] = _0xb07ax11 < 0.4 ? 0.4 : _0xb07ax11 : (_0xb07ax15['depth'] = 0.4, _0xb07ax15['isEdge'] = !1), 1 == _0xb07ax15['isFlipping'] && (_0xb07ax15['depth'] = 0.4), _0xb07ax15['position']['x'] = 0;
                    var _0xb07ax1a = 0.02 * _0xb07ax13,
                        _0xb07ax1b = 180 - 0.02 * (_0xb07ax13 - _0xb07axd) + 0.02 * _0xb07ax13;
                    if (_0xb07ax13 < _0xb07axd ? (_0xb07ax15['newStiffness'] = _0xb07ax18 || 0 == this['stiffness'] ? 0 : _0xb07axc / (_0xb07ax4 / _0xb07axa) / 4, _0xb07ax14 = _0xb07ax1a, _0xb07ax15['position']['z'] = _0xb07ax12 - 0.4 * (-_0xb07ax13 + _0xb07axd), 1 == _0xb07axe && (_0xb07ax15['position']['z'] -= 0.4)) : (_0xb07ax14 = _0xb07ax1b, _0xb07ax15['newStiffness'] = _0xb07ax18 || 0 == this['stiffness'] ? 0 : _0xb07axc / (Math['abs'](_0xb07axa - _0xb07ax4) / _0xb07axa) / 4, _0xb07ax15['position']['z'] = _0xb07ax12 - 0.4 * (-_0xb07axb + _0xb07ax13 + _0xb07axd + 1) - _0xb07ax15['depth']), 0 == _0xb07ax15['isFlipping']) {
                        if (Math['abs'](_0xb07ax16 - _0xb07ax14) > 20 && 0 == _0xb07ax15['skipFlip']) {
                            _0xb07ax15['depth'] = 0.4;
                            var _0xb07ax1c = _0xb07ax15['stiffness'];
                            _0xb07ax1c = _0xb07ax16 > _0xb07ax14 ? _0xb07axc / (Math['abs'](_0xb07axa - _0xb07ax4) / _0xb07axa) / 4 : _0xb07axc / (_0xb07ax4 / _0xb07axa) / 4, _0xb07ax15['position']['z'] += 0.4, _0xb07ax15['stiffness'] = isNaN(_0xb07ax1c) ? _0xb07ax15['stiffness'] : _0xb07ax1c, _0xb07ax15['updateAngle'](!0), _0xb07ax15['targetStiffness'] = _0xb07ax18 ? 0 : _0xb07ax13 < _0xb07ax4 ? _0xb07axc / (Math['abs'](_0xb07axa - _0xb07ax4) / _0xb07axa) / 4 : _0xb07axc / (_0xb07ax4 / _0xb07axa) / 4, _0xb07ax15['targetStiffness'] = _0xb07ax18 ? 0 : isNaN(_0xb07ax15['targetStiffness']) ? _0xb07ax15['stiffness'] : _0xb07ax15['targetStiffness'], _0xb07ax15['isFlipping'] = !0, _0xb07ax15['tween'](_0xb07ax16, _0xb07ax14), null != this['preFlipCallback'] && this['preFlipCallback']()
                        } else {
                            _0xb07ax15['skipFlip'] = !1, _0xb07ax15['newStiffness'] = isNaN(_0xb07ax15['newStiffness']) ? 0 : _0xb07ax15['newStiffness'], _0xb07ax15['angles'][1] == _0xb07ax14 && _0xb07ax15['stiffness'] == _0xb07ax15['newStiffness'] && _0xb07ax15['depth'] == _0xb07ax15['oldDepth'] || (_0xb07ax15['angles'][1] = _0xb07ax15['angles'][4] = _0xb07ax14, _0xb07ax15['stiffness'] = _0xb07ax15['newStiffness'], _0xb07ax15['updateAngle'](!0))
                        }
                    };
                    _0xb07ax15['visible'] = _0xb07ax6 ? _0xb07ax5 ? _0xb07ax13 < _0xb07axd || _0xb07ax15['isFlipping'] : _0xb07ax13 >= _0xb07axd || _0xb07ax15['isFlipping'] : _0xb07ax17 >= 0 && _0xb07ax17 < _0xb07axa || _0xb07ax6 && _0xb07ax17 == _0xb07axa, null != this['requestPage'] && 1 == _0xb07ax15['visible'] && (_0xb07ax15['name'] = _0xb07ax17.toString(), _0xb07ax15['name'] != _0xb07ax19 && (_0xb07ax15['textureLoaded'] = !1, _0xb07ax15['frontImage'](_0xb07ax9['textureLoadFallback']), _0xb07ax15['frontPageStamp'] = '-1', _0xb07ax15['frontTextureLoaded'] = !1, _0xb07ax15['thumbLoaded'] = !1, _0xb07ax15['backImage'](_0xb07ax9['textureLoadFallback']), _0xb07ax15['backPageStamp'] = '-1', _0xb07ax15['backTextureLoaded'] = !1, this['requestPage']())), _0xb07ax15['oldDepth'] = _0xb07ax15['depth'];
                    var _0xb07ax1d = Math['abs'](_0xb07ax15['geometry']['boundingBox']['max']['x']) < Math['abs'](_0xb07ax15['geometry']['boundingBox']['min']['x']) ? _0xb07ax15['geometry']['boundingBox']['max']['x'] : _0xb07ax15['geometry']['boundingBox']['min']['x'];
                    _0xb07ax15['position']['x'] = 1 == _0xb07ax15['isEdge'] && 0 == _0xb07ax15['isFlipping'] ? _0xb07ax13 < _0xb07axd ? _0xb07ax1d : -_0xb07ax1d : 0
                };
                this['oldBaseNumber'] = _0xb07ax4, null != this['updatePageCallback'] && this['updatePageCallback']()
            }, _0xb07ax5['prototype']['createCover'] = function(_0xb07ax3) {
                _0xb07ax3['width'] = 2 * _0xb07ax3['width'], this['cover'] = new MOCKUP.BiFold(_0xb07ax3), this['add'](this['cover'])
            }, _0xb07ax5['prototype']['createStack'] = function(_0xb07ax3) {
                for (var _0xb07ax4 = 'red,green,blue,yellow,orange,black' ['split'](','), _0xb07ax5 = 0; _0xb07ax5 < this['stackCount']; _0xb07ax5++) {
                    _0xb07ax3['angles'] = [, this['stackCount'] - _0xb07ax5], _0xb07ax3['stiffness'] = (this['stackCount'] - _0xb07ax5) / 100;
                    var _0xb07ax6 = new MOCKUP.BookPaper(_0xb07ax3);
                    _0xb07ax6['angles'][1] = 180, _0xb07ax6['index'] = _0xb07ax5, _0xb07ax6['updateAngle'](), _0xb07ax6['textureReady'] = !1, _0xb07ax6['textureRequested'] = !1, this['add'](_0xb07ax6), _0xb07ax6['color'] = _0xb07ax4[_0xb07ax5], _0xb07ax6['position']['z'] = -1 * _0xb07ax5
                }
            }, _0xb07ax5['prototype']['shininess'] = function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['mainObject']['shininess']()
                };
                this['mainObject']['shininess'](_0xb07ax3)
            }, _0xb07ax5['prototype']['bumpScale'] = function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['mainObject']['bumpScale']()
                };
                this['mainObject']['bumpScale'](_0xb07ax3)
            }, _0xb07ax5['prototype']['frontImage'] = function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['mainObject']['frontImage']()
                };
                this['mainObject']['frontImage'](_0xb07ax3)
            }, _0xb07ax5['prototype']['backImage'] = function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['mainObject']['backImage']()
                };
                this['mainObject']['backImage'](_0xb07ax3)
            }, _0xb07ax5
        }(MOCKUP.Bundle);
        MOCKUP['Book'] = _0xb07ax6
    }
    var _0xb07ax2d = function(_0xb07ax5) {
        function _0xb07ax6(_0xb07ax4) {
            _0xb07ax4 = _0xb07ax4 || {}, this['type'] = 'PreviewObject';
            var _0xb07ax5 = this;

            function _0xb07ax6() {
                setTimeout(function() {
                    _0xb07ax5['resize']()
                }, 50)
            }
            _0xb07ax5['zoomValue'] = 1, window['addEventListener']('resize', _0xb07ax6, !1), this['sound'] = document['createElement']('audio'), this['sound']['setAttribute']('src', _0xb07ax4['soundFile'] + '?ver=' + _0xb07ax3['version']), this['sound']['setAttribute']('type', 'audio/mpeg'), this['autoPlayFunction'] = function() {
                _0xb07ax5 && _0xb07ax5['target']['autoPlay'] && (_0xb07ax5['target']['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? _0xb07ax5['target']['prev']() : _0xb07ax5['target']['next']())
            }, this['dispose'] = function() {
                if (clearInterval(this['autoPlayTimer']), this['autoPlayTimer'] = null, this['autoPlayFunction'] = null, this['target'] && this['target']['children']) {
                    for (var _0xb07ax3 = 0; _0xb07ax3 < this['target']['children']['length']; _0xb07ax3++) {
                        var _0xb07ax4 = this['target']['children'][_0xb07ax3];
                        _0xb07ax4 && _0xb07ax4['currentTween'] && _0xb07ax4['currentTween']['stop']()
                    }
                };
                this['zoomTween'] && (this['zoomTween']['stop'] && this['zoomTween']['stop'](), this['zoomTween'] = null), this['container'] && this['container']['info'] && this['container']['info']['remove'] && this['container']['info']['remove'](), this['target'] && this['target']['dispose'] && this['target']['dispose'](), this['target'] = null, this['stage'] && this['stage']['dispose'] && this['stage']['dispose'](), this['stage'] = null, this['ui'] && this['ui']['dispose'] && this['ui']['dispose'](), this['ui'] = null, this['contentProvider'] && this['contentProvider']['dispose'] && this['contentProvider']['dispose'](), this['contentProvider'] = null, window['removeEventListener']('resize', _0xb07ax6)
            }
        }
        return _0xb07ax6['prototype'] = {
            start: function() {
                this['target']['gotoPage'](this['target']['startPage'])
            },
            end: function() {
                this['target']['gotoPage'](this['target']['endPage'])
            },
            next: function() {},
            prev: function() {},
            zoom: function(_0xb07ax3) {
                this['pendingZoom'] = !0, this['zoomDelta'] = _0xb07ax3, this['resize'](), this['ui']['update']()
            },
            resize: function() {
                var _0xb07ax5 = this;
                if (null != _0xb07ax5['target'] && null != _0xb07ax5['target']['ui'] && null != _0xb07ax5['target']['contentProvider'] && null != _0xb07ax5['target']['contentProvider']['viewport'] && null != _0xb07ax5['target']['stage']) {
                    this['ui'] && 1 == this['ui']['isFullscreen'] && 1 == _0xb07axd['hasFullscreenEnabled']() && null == _0xb07axd['getFullscreenElement']() && this['ui']['switchFullscreen']();
                    var _0xb07ax6, _0xb07ax7, _0xb07ax8, _0xb07ax9, _0xb07axa, _0xb07axb, _0xb07axc = _0xb07ax5['target'],
                        _0xb07axf = _0xb07ax5['container'],
                        _0xb07ax10 = _0xb07ax5['options'],
                        _0xb07ax11 = _0xb07axc['stage'],
                        _0xb07ax12 = _0xb07axc['contentProvider'],
                        _0xb07ax13 = _0xb07ax12['pageRatio'],
                        _0xb07ax14 = (_0xb07ax12['zoomViewport'], _0xb07ax24(_0xb07axc)),
                        _0xb07ax15 = 'css' !== _0xb07axc['mode'],
                        _0xb07ax16 = (_0xb07ax12['pageRatio'], _0xb07axf['hasClass']('pdff-sidemenu-open') ? 220 : 0),
                        _0xb07ax17 = this['target']['pageMode'] == _0xb07ax3['PAGE_MODE']['SINGLE'];
                    _0xb07axf['height'](_0xb07ax10['height']);
                    var _0xb07ax1a = Math['min'](_0xb07axf['height'](), _0xb07ax4(window)['height']());
                    _0xb07axf['height'](_0xb07ax1a);
                    var _0xb07ax1b = _0xb07axf['width']();
                    _0xb07ax1b < 400 ? _0xb07ax5['container']['addClass']('pdff-xs') : _0xb07ax5['container']['removeClass']('pdff-xs');
                    var _0xb07ax1c = _0xb07axf['find']('.pdff-ui-controls')['height'](),
                        _0xb07ax1d = _0xb07ax10['paddingTop'] + (_0xb07ax10['controlsPosition'] == _0xb07ax3['CONTROLSPOSITION']['TOP'] ? _0xb07ax1c : 0),
                        _0xb07ax1e = _0xb07ax10['paddingRight'],
                        _0xb07ax1f = _0xb07ax10['paddingBottom'] + (_0xb07ax10['controlsPosition'] == _0xb07ax3['CONTROLSPOSITION']['BOTTOM'] ? _0xb07ax1c : 0),
                        _0xb07ax20 = _0xb07ax10['paddingLeft'],
                        _0xb07ax21 = _0xb07ax1b - _0xb07ax16,
                        _0xb07ax22 = _0xb07ax1a,
                        _0xb07ax23 = (_0xb07ax1d = isNaN(_0xb07ax1d) ? 0 : _0xb07ax18(_0xb07ax1d, 0, _0xb07ax1d)) + (_0xb07ax1f = isNaN(_0xb07ax1f) ? 0 : _0xb07ax18(_0xb07ax1f, 0, _0xb07ax1f)),
                        _0xb07ax25 = (_0xb07ax20 = isNaN(_0xb07ax20) ? 0 : _0xb07ax18(_0xb07ax20, 0, _0xb07ax20)) + (_0xb07ax1e = isNaN(_0xb07ax1e) ? 0 : _0xb07ax18(_0xb07ax1e, 0, _0xb07ax1e)),
                        _0xb07ax26 = _0xb07ax21 - _0xb07ax25,
                        _0xb07ax27 = _0xb07ax22 - _0xb07ax23;
                    if (_0xb07ax8 = Math['floor'](_0xb07ax17 ? _0xb07ax26 : _0xb07ax26 / 2), (_0xb07ax6 = (_0xb07ax7 = Math['floor'](_0xb07ax8 / _0xb07ax13)) > _0xb07ax27) && (_0xb07ax8 = (_0xb07ax7 = _0xb07ax27) * _0xb07ax13), _0xb07axb = _0xb07ax12['maxZoom'] = _0xb07ax12['zoomViewport']['height'] / _0xb07ax7, null == _0xb07ax5['zoomValue'] && (_0xb07ax5['zoomValue'] = 1), null == _0xb07ax12['zoomScale'] && (_0xb07ax12['zoomScale'] = 1), 1 == _0xb07ax5['pendingZoom'] && null != _0xb07ax5['zoomDelta']) {
                        _0xb07ax5['zoomDelta'];
                        var _0xb07ax28, _0xb07ax29 = Math['max'](_0xb07ax7, _0xb07ax8);
                        _0xb07ax5['zoomValue'] = _0xb07ax5['zoomDelta'] > 0 ? _0xb07ax5['zoomValue'] * _0xb07ax5['options']['zoomRatio'] : _0xb07ax5['zoomValue'] / _0xb07ax5['options']['zoomRatio'], _0xb07ax5['zoomValue'] = _0xb07ax18(_0xb07ax5['zoomValue'], 1, _0xb07axb), 1 == _0xb07ax5['zoomValue'] ? _0xb07ax12['zoomScale'] = 1 : (_0xb07ax28 = _0xb07ax7 * _0xb07ax5['zoomValue'], _0xb07ax28 = _0xb07axd['zoomStops'](_0xb07ax28, _0xb07ax5['options']['zoomRatio'], _0xb07ax5['zoomDelta'] > 0, Math['max'](_0xb07ax8, _0xb07ax7)), _0xb07ax12['zoomScale'] = _0xb07ax18(_0xb07ax28 / _0xb07ax29, 1, _0xb07axb))
                    };
                    _0xb07axa = _0xb07ax12['zoomScale'], _0xb07ax12['checkViewportSize'](_0xb07ax8, _0xb07ax7, _0xb07axa), _0xb07ax12['contentSourceType'] == _0xb07axe['PDF'] && (_0xb07ax8 = _0xb07ax12['imageViewport']['width'] / _0xb07axa, _0xb07ax7 = _0xb07ax12['imageViewport']['height'] / _0xb07axa), 1 != _0xb07ax12['zoomScale'] && this['target']['container']['addClass']('pdff-zoom-enabled');
                    var _0xb07ax2a = _0xb07axc['zoomWidth'] = Math['floor'](_0xb07ax8 * _0xb07axa),
                        _0xb07ax2b = _0xb07axc['zoomHeight'] = Math['floor'](_0xb07ax7 * _0xb07axa),
                        _0xb07ax2c = 2 * _0xb07ax2a;
                    if (_0xb07ax15) {
                        var _0xb07ax2d = _0xb07ax2b / _0xb07axc['height'],
                            _0xb07ax2e = _0xb07ax6 ? _0xb07axa * (_0xb07ax7 + _0xb07ax23) / _0xb07ax2d : _0xb07axa * (_0xb07ax8 * (_0xb07ax17 ? 1 : 2) + _0xb07ax25) / _0xb07ax2d / (_0xb07ax21 / _0xb07ax22);
                        _0xb07ax11['resizeCanvas'](_0xb07ax21, _0xb07ax22), _0xb07ax9 = 1 / (2 * Math['tan'](Math['PI'] * _0xb07ax11['camera']['fov'] * 0.5 / 180) / (_0xb07ax2e / _0xb07axa)) + 2.2, _0xb07ax11['camera']['updateProjectionMatrix'](), _0xb07ax11['renderRequestPending'] = !0;
                        var _0xb07ax2f = (_0xb07ax1d - _0xb07ax1f) * (_0xb07axc['height'] / _0xb07ax7) / _0xb07axa / 2,
                            _0xb07ax30 = 1 == _0xb07ax12['zoomScale'];
                        _0xb07ax11['camera']['position']['z'] !== _0xb07ax9 && 1 == _0xb07ax5['pendingZoom'] ? (null != _0xb07ax5['zoomTween'] && _0xb07ax5['zoomTween']['stop'](), _0xb07ax5['zoomTween'] = new TWEEN.Tween({
                            campos: _0xb07ax11['camera']['position']['z'],
                            otx: _0xb07ax11['orbitControl']['target']['x'],
                            oty: _0xb07ax11['orbitControl']['target']['y'],
                            otz: _0xb07ax11['orbitControl']['target']['z']
                        })['delay'](0)['to']({
                            campos: _0xb07ax9,
                            otx: 0,
                            oty: _0xb07ax2f,
                            otz: 0
                        }, 100)['onUpdate'](function() {
                            _0xb07ax11['camera']['position']['z'] = this['campos'], _0xb07ax30 && (_0xb07ax11['camera']['position']['y'] = this['oty'], _0xb07ax11['orbitControl']['target'] = new THREE.Vector3(this['otx'], this['oty'], this['otz'])), _0xb07ax11['orbitControl']['update']()
                        })['easing'](TWEEN['Easing']['Linear'].None)['onComplete'](function() {
                            _0xb07ax11['camera']['position']['z'] = _0xb07ax9, 1 == _0xb07ax12['zoomScale'] && (_0xb07ax11['camera']['position']['set'](0, _0xb07ax2f, _0xb07ax9), _0xb07ax11['orbitControl']['target'] = new THREE.Vector3(0, _0xb07ax2f, 0)), _0xb07ax11['orbitControl']['update']()
                        })['start']()) : (1 == _0xb07ax12['zoomScale'] && (_0xb07ax11['camera']['position']['set'](0, _0xb07ax2f, _0xb07ax9), _0xb07ax11['orbitControl']['target'] = new THREE.Vector3(0, _0xb07ax2f, 0)), _0xb07ax11['orbitControl']['update']()), _0xb07ax11['orbitControl']['update'](), _0xb07ax11['orbitControl']['mouseButtons']['ORBIT'] = 1 != _0xb07axa ? -1 : THREE['MOUSE']['RIGHT'], _0xb07ax11['orbitControl']['mouseButtons']['PAN'] = 1 != _0xb07axa ? THREE['MOUSE']['LEFT'] : -1
                    } else {
                        _0xb07axc['pageWidth'] = Math['round'](_0xb07ax8), _0xb07axc['fullWidth'] = 2 * _0xb07axc['pageWidth'], _0xb07axc['height'] = Math['round'](_0xb07ax7);
                        var _0xb07ax31 = _0xb07axc['shiftHeight'] = Math['round'](_0xb07ax18((_0xb07ax2b - _0xb07ax22 + _0xb07ax23) / 2, 0, _0xb07ax2b)),
                            _0xb07ax32 = _0xb07axc['shiftWidth'] = Math['round'](_0xb07ax18((_0xb07ax2c - _0xb07ax21 + _0xb07ax25) / 2, 0, _0xb07ax2c));
                        1 == _0xb07axa && (_0xb07axc['left'] = 0, _0xb07axc['top'] = 0), _0xb07axc['stage']['css']({
                            top: -_0xb07ax31,
                            bottom: -_0xb07ax31,
                            right: -_0xb07ax32 + (_0xb07ax14 ? _0xb07ax16 : 0),
                            left: -_0xb07ax32 + (_0xb07ax14 ? 0 : _0xb07ax16),
                            paddingTop: _0xb07ax1d,
                            paddingRight: _0xb07ax1e,
                            paddingBottom: _0xb07ax1f,
                            paddingLeft: _0xb07ax20,
                            transform: 'translate3d(' + _0xb07axc['left'] + 'px,' + _0xb07axc['top'] + 'px,0)'
                        }), _0xb07axc['stageHeight'] = _0xb07ax11['height'](), _0xb07axc['wrapper']['css']({
                            width: _0xb07ax2c,
                            height: _0xb07ax2b,
                            marginTop: _0xb07ax1a - _0xb07ax2b - _0xb07ax23 > 0 ? (_0xb07ax1a - _0xb07ax23 - _0xb07ax2b) / 2 : 0
                        });
                        var _0xb07ax33 = Math['floor'](_0xb07ax19(_0xb07ax8, _0xb07ax7) * _0xb07axa);
                        _0xb07axc['stage']['find']('.pdff-page-wrapper')['width'](_0xb07ax33)['height'](_0xb07ax33), _0xb07axc['stage']['find']('.ppdff-flipbook-page, .pdff-page-front , .pdff-page-back, .pdff-page-fold-inner-shadow')['height'](_0xb07ax2b)['width'](_0xb07ax2a)
                    };
                    _0xb07ax5['checkCenter']({
                        type: 'resize'
                    }), 1 == _0xb07ax12['zoomScale'] && this['target']['container']['removeClass']('pdff-zoom-enabled'), _0xb07axc['thumblist'] && _0xb07axc['thumblist']['reset'](_0xb07ax4(_0xb07axc['thumblist']['container'])['height']()), _0xb07ax5['pendingZoom'] = !1
                }
            },
            playSound: function() {
                try {
                    this['options'] && 1 == this['options']['enableSound'] && (this['sound']['currentTime'] = 0, this['sound']['play']())
                } catch (_0xb07ax3) {}
            },
            setPageMode: function(_0xb07ax4) {
                1 == _0xb07ax4 ? (this['ui']['pageMode']['addClass'](this['options']['icons']['doublepage']), this['ui']['pageMode']['html']('<span>' + this['options']['text']['doublePageMode'] + '</span>'), this['ui']['pageMode']['attr']('title', this['options']['text']['doublePageMode']), this['target']['pageMode'] = _0xb07ax3['PAGE_MODE']['SINGLE']) : (this['ui']['pageMode']['removeClass'](this['options']['icons']['doublepage']), this['ui']['pageMode']['html']('<span>' + this['options']['text']['singlePageMode'] + '</span>'), this['ui']['pageMode']['attr']('title', this['options']['text']['singlePageMode']), this['target']['pageMode'] = _0xb07ax3['PAGE_MODE']['DOUBLE']), this['target'] && this['target']['singlePageMode'] == _0xb07ax3['SINGLE_PAGE_MODE']['BOOKLET'] && this['target']['reset'](), this['resize']()
            },
            setAutoPlay: function(_0xb07ax3) {
                if (this['options']['autoPlay']) {
                    var _0xb07ax4 = (_0xb07ax3 = 1 == _0xb07ax3) ? this['options']['text']['pause'] : this['options']['text']['play'];
                    this['ui']['play']['toggleClass'](this['options']['icons']['pause'], _0xb07ax3), this['ui']['play']['html']('<span>' + _0xb07ax4 + '</span>'), this['ui']['play']['attr']('title', _0xb07ax4), clearInterval(this['autoPlayTimer']), _0xb07ax3 && (this['autoPlayTimer'] = setInterval(this['autoPlayFunction'], this['options']['autoPlayDuration'])), this['target']['autoPlay'] = _0xb07ax3
                }
            },
            height: function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['container']['height']()
                };
                this['options']['height'] = _0xb07ax3, this['container']['height'](_0xb07ax3), this['resize']()
            },
            checkCenter: function(_0xb07ax4) {
                _0xb07ax4 = null == _0xb07ax4 ? {} : _0xb07ax4, this['centerType'] = this['centerType'] || 'start';
                var _0xb07ax5, _0xb07ax6 = this['target'],
                    _0xb07ax7 = 0,
                    _0xb07ax8 = 0,
                    _0xb07ax9 = 0,
                    _0xb07axa = _0xb07axd['getBasePage'](_0xb07ax6._activePage),
                    _0xb07axb = _0xb07ax6['_activePage'] % 2 == 0,
                    _0xb07axc = _0xb07ax6['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                    _0xb07axe = _0xb07ax6['pageMode'] == _0xb07ax3['PAGE_MODE']['SINGLE'],
                    _0xb07axf = _0xb07axe && _0xb07ax6['singlePageMode'] == _0xb07ax3['SINGLE_PAGE_MODE']['BOOKLET'],
                    _0xb07ax10 = _0xb07ax6['stage']['width']();
                if ('css' == _0xb07ax6['mode']) {
                    _0xb07ax5 = _0xb07ax6['wrapper']['width'](), _0xb07ax7 = Math['max']((_0xb07ax5 - _0xb07ax10) / 2, 0), _0xb07ax8 = -_0xb07ax5 / 4, _0xb07ax9 = _0xb07ax5 / 4, 0 == _0xb07axa || _0xb07axf ? (_0xb07ax6['wrapper']['css']({
                        left: _0xb07axe ? _0xb07axc ? _0xb07ax9 - _0xb07ax7 : _0xb07ax8 - _0xb07ax7 : _0xb07axc ? _0xb07ax9 : _0xb07ax8
                    }), _0xb07ax6['shadow']['css']({
                        width: '50%',
                        left: _0xb07axc ? 0 : '50%',
                        transitionDelay: ''
                    })) : _0xb07axa == _0xb07ax6['pageCount'] ? (_0xb07ax6['wrapper']['css']({
                        left: _0xb07axe ? _0xb07axc ? _0xb07ax8 - _0xb07ax7 : _0xb07ax9 - _0xb07ax7 : _0xb07axc ? _0xb07ax8 : _0xb07ax9
                    }), _0xb07ax6['shadow']['css']({
                        width: '50%',
                        left: _0xb07axc ? '50%' : 0,
                        transitionDelay: ''
                    })) : (_0xb07ax6['wrapper']['css']({
                        left: _0xb07axe ? _0xb07axc ? _0xb07axb ? _0xb07ax8 - _0xb07ax7 : _0xb07ax9 - _0xb07ax7 : _0xb07axb ? _0xb07ax9 - _0xb07ax7 : _0xb07ax8 - _0xb07ax7 : 0
                    }), _0xb07ax6['shadow']['css']({
                        width: '100%',
                        left: 0,
                        transitionDelay: parseInt(_0xb07ax6['duration'], 10) + 50 + 'ms'
                    })), _0xb07ax6['wrapper']['css']({
                        transition: 'resize' == _0xb07ax4['type'] ? 'none' : ''
                    })
                } else {
                    if (null != _0xb07ax6['stage']) {
                        var _0xb07ax11, _0xb07ax12 = _0xb07ax6['position']['x'];
                        _0xb07ax7 = _0xb07ax6['width'] / 4, _0xb07ax8 = -(_0xb07ax5 = _0xb07ax6['width']) / 2, _0xb07ax9 = _0xb07ax5 / 2, (_0xb07ax11 = 0 == _0xb07axa || _0xb07axf ? _0xb07axc ? _0xb07ax9 : _0xb07ax8 : _0xb07axa == _0xb07ax6['pageCount'] ? _0xb07axc ? _0xb07ax8 : _0xb07ax9 : _0xb07axe ? _0xb07axc ? _0xb07axb ? _0xb07ax8 : _0xb07ax9 : _0xb07axb ? _0xb07ax9 : _0xb07ax8 : 0) !== this['centerEnd'] && (this['centerTween'] = new TWEEN.Tween({
                            x: _0xb07ax12
                        })['delay'](0)['to']({
                            x: _0xb07ax11
                        }, _0xb07ax6['duration'])['onUpdate'](function() {
                            _0xb07ax6['position']['x'] = this['x'], _0xb07ax6['stage']['cssScene']['position']['x'] = this['x']
                        })['easing'](_0xb07ax6['ease'])['start'](), this['centerEnd'] = _0xb07ax11)
                    }
                }
            },
            width: function(_0xb07ax3) {
                if (null == _0xb07ax3) {
                    return this['container']['width']()
                };
                this['options']['width'] = _0xb07ax3, this['container']['width'](_0xb07ax3), this['resize']()
            }
        }, _0xb07ax6
    }();
    _0xb07ax3['PreviewObject'] = _0xb07ax2d;
    var _0xb07ax2e = function(_0xb07ax5) {
            function _0xb07ax6(_0xb07ax5, _0xb07ax6, _0xb07ax7, _0xb07ax8) {
                _0xb07ax7 = _0xb07ax7 || {};
                var _0xb07axa = this;
                if (_0xb07axa['contentRawSource'] = _0xb07ax5 || [_0xb07ax9['textureLoadFallback']], _0xb07axa['contentSource'] = _0xb07axa['contentRawSource'], _0xb07axa['contentSourceType'] = null, _0xb07axa['minDimension'] = _0xb07ax7['minTextureSize'] || 256, _0xb07axa['maxDimension'] = _0xb07ax7['maxTextureSize'] || 2048, _0xb07axa['pdfRenderQuality'] = _0xb07ax7['pdfRenderQuality'] || _0xb07ax3['defaults']['pdfRenderQuality'], _0xb07axa['flipbook'] = _0xb07ax8, _0xb07axa['waitPeriod'] = 50, _0xb07axa['maxLength'] = 297, _0xb07axa['enableDebug'] = !1, _0xb07axa['zoomScale'] = 1, _0xb07axa['maxZoom'] = 2, _0xb07axa['options'] = _0xb07ax7, _0xb07axa['outline'] = _0xb07ax7['outline'], _0xb07axa['links'] = _0xb07ax7['links'], _0xb07axa['html'] = _0xb07ax7['html'], _0xb07axa['isCrossOrigin'] = _0xb07ax7['isCrossOrigin'], _0xb07axa['normalViewport'] = {
                        height: 297,
                        width: 210,
                        scale: 1
                    }, _0xb07axa['viewport'] = {
                        height: 297,
                        width: 210,
                        scale: 1
                    }, _0xb07axa['imageViewport'] = {
                        height: 297,
                        width: 210,
                        scale: 1
                    }, _0xb07axa['bookSize'] = {
                        height: 297,
                        width: 210
                    }, _0xb07axa['zoomViewport'] = {
                        height: 297,
                        width: 210
                    }, _0xb07axa['thumbsize'] = 128, _0xb07axa['cacheIndex'] = 256, _0xb07axa['cache'] = [], _0xb07axa['pageRatio'] = _0xb07ax7['pageRatio'] || _0xb07axa['viewport']['width'] / _0xb07axa['viewport']['height'], _0xb07axa['textureLoadTimeOut'] = null, _0xb07axa['type'] = 'TextureLibrary', Array === _0xb07axa['contentSource']['constructor'] || Array['isArray'](_0xb07axa['contentSource']) || _0xb07axa['contentSource'] instanceof Array) {
                    _0xb07axa['contentSourceType'] = _0xb07axe['IMAGE'], _0xb07axa['pageCount'] = _0xb07axa['contentSource']['length'], _0xb07ax4('<img/>')['attr']('src', _0xb07axa['contentSource'][0])['on']('load', function() {
                        _0xb07axa['viewport']['height'] = this['height'], _0xb07axa['viewport']['width'] = this['width'], _0xb07axa['pageRatio'] = _0xb07axa['viewport']['width'] / _0xb07axa['viewport']['height'], _0xb07axa['bookSize'] = {
                            width: (_0xb07axa['pageRatio'] > 1 ? 1 : _0xb07axa['pageRatio']) * _0xb07axa['maxLength'],
                            height: _0xb07axa['maxLength'] / (_0xb07axa['pageRatio'] < 1 ? 1 : _0xb07axa['pageRatio'])
                        }, _0xb07axa['zoomViewport'] = {
                            width: (_0xb07axa['pageRatio'] > 1 ? 1 : _0xb07axa['pageRatio']) * _0xb07axa['maxDimension'],
                            height: _0xb07axa['maxDimension'] / (_0xb07axa['pageRatio'] < 1 ? 1 : _0xb07axa['pageRatio'])
                        }, _0xb07axa['linkService'] = new PDFLinkService, _0xb07ax4(this)['off'](), _0xb07axa['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && (_0xb07axa['pageCount'] = 2 * _0xb07axa['contentSource']['length'] - 2, 1 == _0xb07axa['options']['webgl'] && (_0xb07axa['requiresImageTextureScaling'] = !0)), null != _0xb07ax6 && (_0xb07ax6(_0xb07axa), _0xb07ax6 = null), _0xb07ax1c(this['height'] + ':' + this['width'])
                    })
                } else {
                    if ('string' == typeof _0xb07axa['contentSource'] || _0xb07axa['contentSource'] instanceof String) {
                        var _0xb07axb = function() {
                                if (_0xb07axa) {
                                    PDFJS['workerSrc'] = _0xb07ax9['pdfjsWorkerSrc'], _0xb07axa['contentSourceType'] = _0xb07axe['PDF'], PDFJS['disableAutoFetch'] = !0, PDFJS['disableStream'] = !0, (_0xb07ax27 || _0xb07ax28 || 1 == _0xb07axa['options']['disableFontFace']) && (PDFJS['disableFontFace'] = _0xb07ax27 || _0xb07ax28 || 1 == _0xb07axa['options']['disableFontFace']), PDFJS['imageResourcesPath'] = _0xb07ax9['imageResourcesPath'], PDFJS['cMapUrl'] = _0xb07ax9['cMapUrl'], PDFJS['cMapPacked'] = !0, PDFJS['externalLinkTarget'] = PDFJS['LinkTarget']['BLANK'];
                                    var _0xb07ax4 = _0xb07axa['loading'] = PDFJS['getDocument'](_0xb07axa['options']['docParameters'] ? _0xb07axa['options']['docParameters'] : {
                                        url: _0xb07axd['httpsCorrection'](_0xb07ax5),
                                        rangeChunkSize: isNaN(_0xb07ax3['defaults']['rangeChunkSize']) ? 524288 : _0xb07ax3['defaults']['rangeChunkSize']
                                    });
                                    _0xb07ax4['then'](function(_0xb07ax4) {
                                        _0xb07axa['pdfDocument'] = _0xb07ax4, _0xb07ax4['getPage'](1)['then'](function(_0xb07ax5) {
                                            _0xb07axa['normalViewport'] = _0xb07ax5['getViewport'](1), _0xb07axa['viewport'] = _0xb07ax5['getViewport'](1), _0xb07axa['viewport']['height'] = _0xb07axa['viewport']['height'] / 10, _0xb07axa['viewport']['width'] = _0xb07axa['viewport']['width'] / 10, _0xb07axa['pageRatio'] = _0xb07axa['viewport']['width'] / _0xb07axa['viewport']['height'], _0xb07axa['bookSize'] = {
                                                width: (_0xb07axa['pageRatio'] > 1 ? 1 : _0xb07axa['pageRatio']) * _0xb07axa['maxLength'],
                                                height: _0xb07axa['maxLength'] / (_0xb07axa['pageRatio'] < 1 ? 1 : _0xb07axa['pageRatio'])
                                            }, _0xb07axa['zoomViewport'] = {
                                                width: (_0xb07axa['pageRatio'] > 1 ? 1 : _0xb07axa['pageRatio']) * _0xb07axa['maxDimension'],
                                                height: _0xb07axa['maxDimension'] / (_0xb07axa['pageRatio'] < 1 ? 1 : _0xb07axa['pageRatio'])
                                            }, _0xb07axa['refPage'] = _0xb07ax5, _0xb07ax4['numPages'] > 1 ? _0xb07ax4['getPage'](2)['then'](function(_0xb07ax5) {
                                                if (_0xb07axa['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['AUTO']) {
                                                    var _0xb07ax7 = _0xb07ax5['getViewport'](1);
                                                    _0xb07ax7['width'] / _0xb07ax7['height'] > 1.5 * _0xb07axa['pageRatio'] ? (_0xb07axa['options']['pageSize'] = _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'], _0xb07axa['pageCount'] = 2 * _0xb07ax4['numPages'] - 2) : _0xb07axa['options']['pageSize'] = _0xb07ax3['PAGE_SIZE']['SINGLE']
                                                };
                                                null != _0xb07ax6 && (_0xb07ax6(_0xb07axa), _0xb07ax6 = null)
                                            }) : null != _0xb07ax6 && (_0xb07ax6(_0xb07axa), _0xb07ax6 = null)
                                        }), _0xb07axa['linkService'] = new PDFLinkService, _0xb07axa['linkService']['setDocument'](_0xb07ax4, null), _0xb07axa['pageCount'] = _0xb07ax4['numPages'], _0xb07axa['contentSource'] = _0xb07ax4
                                    }, function(_0xb07ax3) {
                                        if (_0xb07axa) {
                                            var _0xb07ax4 = '',
                                                _0xb07ax5 = document['createElement']('a');
                                            _0xb07ax5['href'] = _0xb07axa['contentSource'], _0xb07ax5['hostname'] !== window['location']['hostname'] && (_0xb07ax4 = 'CROSS ORIGIN!! '), _0xb07axa['updateInfo'](_0xb07ax4 + 'Error Loading File -  ' + _0xb07axa['contentSource'])
                                        }
                                    }), _0xb07ax4['onProgress'] = function(_0xb07ax3) {
                                        if (_0xb07axa) {
                                            var _0xb07ax4 = 100 * _0xb07ax3['loaded'] / _0xb07ax3['total'];
                                            isNaN(_0xb07ax4) ? _0xb07ax3 && _0xb07ax3['loaded'] ? _0xb07axa['updateInfo']('Loading Pages ' + (Math['ceil'](_0xb07ax3['loaded'] / 1e4) / 100).toString() + 'MB ...') : _0xb07axa['updateInfo']('Loading Pages ...') : _0xb07axa['updateInfo']('Loading Pages ' + _0xb07ax4.toString()['split']('.')[0] + '% ...')
                                        }
                                    }
                                }
                            },
                            _0xb07axc = function() {
                                if (_0xb07axa) {
                                    _0xb07ax9['pdfjsWorkerSrc'] += '?ver=' + _0xb07ax3['version'], _0xb07axa['updateInfo']('Loading Interface ...');
                                    var _0xb07ax5 = document['createElement']('a');
                                    _0xb07ax5['href'] = _0xb07ax9['pdfjsWorkerSrc'], _0xb07ax5['hostname'] !== window['location']['hostname'] ? (_0xb07axa['updateInfo']('Loading Interface ...'), _0xb07ax4['ajax']({
                                        url: _0xb07ax9['pdfjsWorkerSrc'],
                                        cache: !0,
                                        success: function(_0xb07ax4) {
                                            _0xb07ax9['pdfjsWorkerSrc'] = _0xb07ax3['createObjectURL'](_0xb07ax4, 'text/javascript'), _0xb07axb()
                                        }
                                    })) : _0xb07axb()
                                }
                            };
                        null == window['PDFJS'] ? _0xb07axa && (_0xb07axa['updateInfo']('Loading Interface ...'), _0xb07ax20(_0xb07ax9['pdfjsSrc'] + '?ver=' + _0xb07ax3['version'], function() {
                            'function' == typeof define && define['amd'] ? (_0xb07axa['updateInfo']('Loading Interface ...'), require['config']({
                                paths: {
                                    "\x70\x64\x66\x6A\x73\x2D\x64\x69\x73\x74\x2F\x62\x75\x69\x6C\x64\x2F\x70\x64\x66\x2E\x77\x6F\x72\x6B\x65\x72": _0xb07ax9['pdfjsWorkerSrc']['replace']('.js', '')
                                }
                            }), require(['pdfjs-dist/build/pdf'], function(_0xb07ax3) {
                                _0xb07axc()
                            })) : _0xb07axc()
                        }, function() {
                            _0xb07axa['updateInfo']('Unable to load Interface ..')
                        })) : _0xb07axb()
                    } else {
                        console['error']('Unsupported source type. Please load a valid PDF file.')
                    }
                };
                return this['dispose'] = function() {
                    _0xb07axa['loading'] && _0xb07axa['loading']['destroy'] && _0xb07axa['loading']['destroy'](), _0xb07axa['loading'] = null, _0xb07axa['textureLoadTimeOut'] && (clearTimeout(_0xb07axa['textureLoadTimeOut']), _0xb07axa['textureLoadTimeOut'] = null), this['targetObject'] && (this['targetObject']['thumbContainer'] && this['targetObject']['thumbContainer']['remove'] && this['targetObject']['thumbContainer']['remove'](), this['targetObject']['outlineContainer'] && this['targetObject']['outlineContainer']['remove'] && this['targetObject']['outlineContainer']['remove'](), this['targetObject']['dispose'] && this['targetObject']['dispose'](), this['targetObject']['processPage'] = null, this['targetObject']['requestPage'] = null, this['targetObject']['container'] && this['targetObject']['container']['off'] && this['targetObject']['container']['off']()), this['pdfDocument'] && this['pdfDocument']['destroy'] && this['pdfDocument']['destroy'](), this['linkService'] && this['linkService']['dispose'] && this['linkService']['dispose'](), this['outlineViewer'] && this['outlineViewer']['dispose'] && this['outlineViewer']['dispose'](), this['thumblist'] && this['thumblist']['dispose'] && (this['thumblist']['review'] = null, this['thumblist']['dispose']()), this['activeThumb'] = null, this['targetObject'] = null, this['pdfDocument'] = null, this['linkService'] = null, this['outlineViewer'] = null, this['thumblist'] = null, _0xb07axa = null
                }, this
            }
            return _0xb07ax29(_0xb07ax6, {}), _0xb07ax6['prototype']['updateInfo'] = function(_0xb07ax3) {
                this['flipbook'] && this['flipbook']['updateInfo'] && this['flipbook']['updateInfo'](_0xb07ax3)
            }, _0xb07ax6['prototype']['initThumbs'] = function() {
                var _0xb07ax3, _0xb07ax5 = this;
                null == _0xb07ax5['cache'][_0xb07ax5['thumbsize']] && (_0xb07ax5['cache'][_0xb07ax5['thumbsize']] = []);
                var _0xb07ax6 = function() {
                        clearTimeout(_0xb07ax3), _0xb07ax3 = setTimeout(function() {
                            _0xb07ax3 = setTimeout(_0xb07ax7, _0xb07ax5['waitPeriod'] / 2)
                        }, _0xb07ax5['waitPeriod'])
                    },
                    _0xb07ax7 = function() {
                        var _0xb07ax7 = 0;
                        if ((Date['now']() - _0xb07ax5['thumblist']['lastScrolled'] < 100 ? _0xb07ax7 = 1 : (_0xb07ax5['targetObject']['container']['find']('.pdff-thumb-container .pdff-vrow')['each'](function() {
                                var _0xb07ax3 = _0xb07ax4(this);
                                if (!_0xb07ax3['hasClass']('pdff-thumb-loaded')) {
                                    _0xb07ax7++;
                                    var _0xb07ax8 = _0xb07ax4(this)['attr']('id')['replace']('pdff-thumb', '');
                                    return _0xb07ax5['getPage'](_0xb07ax8, _0xb07ax6, !0), _0xb07ax3['addClass']('pdff-thumb-loaded'), !1
                                }
                            }), 0 == _0xb07ax7 && clearTimeout(_0xb07ax3)), _0xb07ax7 > 0 && _0xb07ax6(), _0xb07ax5['activeThumb'] != _0xb07ax5['targetObject']['_activePage']) && (null != _0xb07ax5['targetObject']['thumbContainer'] && _0xb07ax5['targetObject']['thumbContainer']['hasClass']('pdff-sidemenu-visible'))) {
                            var _0xb07ax8 = _0xb07ax5['thumblist']['container'],
                                _0xb07ax9 = _0xb07ax8['scrollTop'],
                                _0xb07axa = _0xb07ax8['getBoundingClientRect']()['height'],
                                _0xb07axb = _0xb07ax5['targetObject']['thumbContainer']['find']('#pdff-thumb' + _0xb07ax5['targetObject']['_activePage']);
                            _0xb07axb['length'] > 0 ? (_0xb07ax5['targetObject']['thumbContainer']['find']('.pdff-selected')['removeClass']('pdff-selected'), _0xb07axb['addClass']('pdff-selected'), _0xb07ax9 + _0xb07axa < (_0xb07axb = _0xb07axb[0])['offsetTop'] + _0xb07axb['scrollHeight'] ? _0xb07axb['scrollIntoView'](!1) : _0xb07ax9 > _0xb07axb['offsetTop'] && _0xb07axb['scrollIntoView'](), _0xb07ax5['activeThumb'] = _0xb07ax5['targetObject']['_activePage']) : (_0xb07ax4(_0xb07ax8)['scrollTop'](124 * _0xb07ax5['targetObject']['_activePage']), _0xb07ax6())
                        }
                    };
                _0xb07ax5['thumblist'] = _0xb07ax5['targetObject']['thumblist'] = new ThumbList({
                    h: 500,
                    addFn: function(_0xb07ax3) {},
                    scrollFn: _0xb07ax6,
                    itemHeight: 128,
                    totalRows: _0xb07ax5['pageCount'],
                    generatorFn: function(_0xb07ax3) {
                        var _0xb07ax4 = document['createElement']('div'),
                            _0xb07ax5 = _0xb07ax3 + 1;
                        _0xb07ax4['id'] = 'pdff-thumb' + _0xb07ax5;
                        var _0xb07ax6 = document['createElement']('div');
                        return _0xb07ax6['innerHTML'] = _0xb07ax5, _0xb07ax4['appendChild'](_0xb07ax6), _0xb07ax4
                    }
                }), _0xb07ax5['thumblist']['lastScrolled'] = Date['now'](), _0xb07ax5['thumblist']['review'] = _0xb07ax6, _0xb07ax6();
                var _0xb07ax8 = _0xb07ax4('<div>')['addClass']('pdff-thumb-container pdff-sidemenu-visible pdff-sidemenu');
                _0xb07ax8['append'](_0xb07ax4(_0xb07ax5['thumblist']['container'])['addClass']('pdff-thumb-wrapper')), _0xb07ax5['targetObject']['thumbContainer'] = _0xb07ax8, _0xb07ax5['targetObject']['container']['append'](_0xb07ax8);
                var _0xb07ax9 = _0xb07ax4(_0xb07ax11['div'], {
                    class: 'pdff-ui-btn pdff-ui-sidemenu-close ti-close'
                });
                _0xb07ax8['append'](_0xb07ax9), _0xb07ax5['thumblist']['reset'](_0xb07ax4(_0xb07ax5['thumblist']['container'])['height']()), _0xb07ax5['targetObject']['container']['on']('click', '.pdff-thumb-container .pdff-vrow', function(_0xb07ax3) {
                    _0xb07ax3['stopPropagation']();
                    var _0xb07ax6 = _0xb07ax4(this)['attr']('id')['replace']('pdff-thumb', '');
                    _0xb07ax5['targetObject']['gotoPage'](parseInt(_0xb07ax6, 10))
                })
            }, _0xb07ax6['prototype']['initOutline'] = function() {
                var _0xb07ax3 = this,
                    _0xb07ax5 = _0xb07ax4('<div>')['addClass']('pdff-outline-container pdff-sidemenu'),
                    _0xb07ax6 = _0xb07ax4('<div>')['addClass']('pdff-outline-wrapper'),
                    _0xb07ax7 = _0xb07ax4(_0xb07ax11['div'], {
                        class: 'pdff-ui-btn pdff-ui-sidemenu-close ti-close'
                    });

                function _0xb07ax8(_0xb07ax4) {
                    if (1 == _0xb07ax3['options']['overwritePDFOutline'] && (_0xb07ax4 = []), _0xb07ax4 = _0xb07ax4 || [], _0xb07ax3['outline']) {
                        for (var _0xb07ax5 = 0; _0xb07ax5 < _0xb07ax3['outline']['length']; _0xb07ax5++) {
                            _0xb07ax3['outline'][_0xb07ax5]['custom'] = !0, _0xb07ax4 && _0xb07ax4['push'](_0xb07ax3['outline'][_0xb07ax5])
                        }
                    };
                    _0xb07ax3['outlineViewer']['render']({
                        outline: _0xb07ax4
                    })
                }
                _0xb07ax5['append'](_0xb07ax7)['append'](_0xb07ax6), _0xb07ax3['targetObject']['container']['append'](_0xb07ax5), _0xb07ax3['targetObject']['outlineContainer'] = _0xb07ax5, _0xb07ax3['outlineViewer'] = new BookMarkViewer({
                    container: _0xb07ax6[0],
                    linkService: _0xb07ax3['linkService'],
                    outlineItemClass: 'pdff-outline-item',
                    outlineToggleClass: 'pdff-outline-toggle',
                    outlineToggleHiddenClass: 'pdff-outlines-hidden'
                }), _0xb07ax3['pdfDocument'] ? _0xb07ax3['pdfDocument']['getOutline']()['then'](function(_0xb07ax3) {
                    _0xb07ax8(_0xb07ax3)
                }) : _0xb07ax8([]), 1 == _0xb07ax3['options']['autoEnableOutline'] && _0xb07ax3['targetObject']['ui']['outline']['trigger']('click'), 1 == _0xb07ax3['options']['autoEnableThumbnail'] && _0xb07ax3['targetObject']['ui']['thumbnail']['trigger']('click')
            }, _0xb07ax6['prototype']['checkViewportSize'] = function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                var _0xb07ax6 = this,
                    _0xb07ax7 = _0xb07ax6['targetObject'],
                    _0xb07ax8 = _0xb07ax3 * _0xb07ax5,
                    _0xb07axa = _0xb07ax4 * _0xb07ax5,
                    _0xb07axb = _0xb07ax6['cacheIndex'];
                if (_0xb07ax6['contentSourceType'] == _0xb07axe['PDF']) {
                    if (_0xb07ax6['cacheIndex'] = Math['ceil'](Math['max'](_0xb07ax8, _0xb07axa)), _0xb07ax6['cacheIndex'] = Math['floor'](Math['max'](_0xb07ax8, _0xb07axa)), _0xb07ax6['cacheIndex'] = _0xb07ax18(_0xb07ax6['cacheIndex'] * _0xb07ax9['pixelRatio'], _0xb07ax6['minDimension'], _0xb07ax6['maxDimension']), null == _0xb07ax6['cache'][_0xb07ax6['cacheIndex']] && (_0xb07ax6['cache'][_0xb07ax6['cacheIndex']] = []), _0xb07axb !== _0xb07ax6['cacheIndex']) {
                        for (var _0xb07axc = 0; _0xb07axc < _0xb07ax7['children']['length']; _0xb07axc++) {
                            _0xb07ax7['children'][_0xb07axc]
                        };
                        _0xb07ax7['refresh']()
                    };
                    _0xb07ax6['imageViewport'] = _0xb07ax6['refPage']['getViewport'](_0xb07axa / _0xb07ax6['normalViewport']['height']), _0xb07ax6['viewport'] = 'css' == _0xb07ax7['mode'] ? _0xb07ax6['imageViewport'] : _0xb07ax6['refPage']['getViewport'](_0xb07ax6['bookSize']['height'] / _0xb07ax6['normalViewport']['height']), _0xb07ax1c(_0xb07ax6['cacheIndex']);
                    var _0xb07axd = _0xb07ax7['container']['find']('.linkAnnotation'),
                        _0xb07axf = _0xb07ax6['viewport']['clone']({
                            dontFlip: !0
                        });
                    _0xb07axd['css']({
                        transform: 'matrix(' + _0xb07axf['transform']['join'](',') + ')'
                    })
                } else {
                    null == _0xb07ax6['cache'][_0xb07ax6['cacheIndex']] && (_0xb07ax6['cache'][_0xb07ax6['cacheIndex']] = [])
                }
            }, _0xb07ax6['prototype']['getCache'] = function(_0xb07ax3, _0xb07ax4) {
                return 1 == _0xb07ax4 ? null == this['cache'][this['thumbsize']] ? null : this['cache'][this['thumbsize']][_0xb07ax3] : null == this['cache'][this['cacheIndex']] ? null : this['cache'][this['cacheIndex']][_0xb07ax3]
            }, _0xb07ax6['prototype']['setCache'] = function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6) {
                if (1 == _0xb07ax5) {
                    null != this['cache'][this['thumbsize']] && (this['cache'][this['thumbsize']][_0xb07ax3] = _0xb07ax4)
                } else {
                    var _0xb07ax7 = null == _0xb07ax6 ? this['cacheIndex'] : _0xb07ax6;
                    null != this['cache'][_0xb07ax7] && (this['cache'][_0xb07ax7][_0xb07ax3] = _0xb07ax4)
                }
            }, _0xb07ax6['prototype']['setTarget'] = function(_0xb07ax3) {
                var _0xb07ax4 = this;
                if (null == _0xb07ax3) {
                    return this['targetObject']
                };
                this['targetObject'] = _0xb07ax3, _0xb07ax3['contentProvider'] = this, _0xb07ax3['container']['removeClass']('pdff-loading pdff-init'), null != _0xb07ax4['linkService'] && (_0xb07ax4['linkService']['setViewer'](_0xb07ax3), _0xb07ax4['initOutline']()), _0xb07ax3['processPage'] = function(_0xb07ax3, _0xb07ax5) {
                    _0xb07ax3 > 0 && _0xb07ax3 <= _0xb07ax4['pageCount'] ? _0xb07ax4['getPage'](_0xb07ax3, _0xb07ax5) : _0xb07ax4['setPage'](_0xb07ax3, _0xb07ax9['textureLoadFallback'], _0xb07ax5)
                }, _0xb07ax3['requestPage'] = function() {
                    _0xb07ax4['review']('Request')
                }, null != _0xb07ax3['resize'] && _0xb07ax3['resize']()
            }, _0xb07ax6['prototype']['review'] = function(_0xb07ax3) {
                var _0xb07ax4 = this;
                _0xb07ax3 = _0xb07ax3 || 'timer review', clearTimeout(_0xb07ax4['textureLoadTimeOut']), _0xb07ax4['textureLoadTimeOut'] = setTimeout(function() {
                    _0xb07ax4['textureLoadTimeOut'] = setTimeout(_0xb07ax4['reviewPages'], _0xb07ax4['waitPeriod'] / 2, _0xb07ax4, _0xb07ax3)
                }, _0xb07ax4['waitPeriod'])
            }, _0xb07ax6['prototype']['reviewPages'] = function(_0xb07ax3, _0xb07ax5) {
                var _0xb07ax6 = (_0xb07ax3 = _0xb07ax3 || this)['targetObject'];
                if (null != _0xb07ax6) {
                    var _0xb07ax7 = _0xb07ax23(_0xb07ax6);
                    null != _0xb07ax5 && _0xb07ax1c(_0xb07ax5);
                    var _0xb07ax8, _0xb07ax9 = !1;
                    for (_0xb07ax8 = 0; _0xb07ax8 < _0xb07ax3['targetObject']['children']['length']; _0xb07ax8++) {
                        if (1 == _0xb07ax6['children'][_0xb07ax8]['isFlipping']) {
                            _0xb07ax9 = !0;
                            break
                        }
                    };
                    if (0 == _0xb07ax9) {
                        var _0xb07axa = _0xb07ax6['children']['length'] > 3 ? 3 : _0xb07ax6['children']['length'],
                            _0xb07axb = _0xb07ax7 ? _0xb07ax6['_activePage'] : _0xb07ax1f(_0xb07ax6._activePage);
                        for (_0xb07ax3['baseNumber'] = _0xb07axb, _0xb07ax3['zoomScale'] > 1 && (_0xb07axa = 1), _0xb07ax8 = 0; _0xb07ax8 < _0xb07axa; _0xb07ax8++) {
                            var _0xb07axc = Math['floor'](_0xb07ax8 / 2),
                                _0xb07axd = _0xb07ax8 % 2 == 0 ? -_0xb07axc * (_0xb07ax7 ? 1 : 2) : (0 == _0xb07axc ? 1 : _0xb07axc) * (_0xb07ax7 ? 1 : 2),
                                _0xb07axe = _0xb07axb + _0xb07axd,
                                _0xb07axf = _0xb07axb + _0xb07axd + 1,
                                _0xb07ax10 = _0xb07ax6['getPageByNumber'](_0xb07axe),
                                _0xb07ax11 = _0xb07ax6['getPageByNumber'](_0xb07axf),
                                _0xb07ax12 = _0xb07axe + '|' + _0xb07ax3['cacheIndex'],
                                _0xb07ax13 = _0xb07axf + '|' + _0xb07ax3['cacheIndex'],
                                _0xb07ax14 = 0;
                            if (null != _0xb07ax10 && _0xb07ax10['frontPageStamp'] != _0xb07ax12 && 1 == _0xb07ax10['visible'] && (_0xb07ax10['frontTextureLoaded'] = !1, _0xb07ax6['processPage'](_0xb07axe, function() {
                                    _0xb07ax3['review']('Batch Call')
                                }), _0xb07ax10['frontPageStamp'] = _0xb07ax12, _0xb07ax14++), null == _0xb07ax11 || _0xb07ax11['backPageStamp'] == _0xb07ax13 || 1 != _0xb07ax11['visible'] || _0xb07ax7 || (_0xb07ax11['backTextureLoaded'] = !1, _0xb07ax6['processPage'](_0xb07axf, function() {
                                    _0xb07ax3['review']('Batch Call')
                                }), _0xb07ax11['backPageStamp'] = _0xb07ax13, _0xb07ax14++), 0 == _0xb07axd && _0xb07ax3['annotedPage'] !== _0xb07axb && (_0xb07ax3['getAnnotations'](_0xb07axe), _0xb07ax7 || _0xb07ax3['getAnnotations'](_0xb07axf), _0xb07ax3['annotedPage'] = _0xb07axb), _0xb07ax14 > 0) {
                                break
                            }
                        };
                        0 == _0xb07ax14 && 'css' !== _0xb07ax6['mode'] && _0xb07ax3['setLoading'](_0xb07axb)
                    } else {
                        if (_0xb07ax3['review']('Revisit request'), null != _0xb07ax3['annotedPage'] && 'css' !== _0xb07ax6['mode']) {
                            var _0xb07ax15 = _0xb07ax1f(_0xb07ax6._activePage);
                            _0xb07ax4(_0xb07ax6['getContentLayer'](_0xb07ax15))['html'](''), _0xb07ax4(_0xb07ax6['getContentLayer'](_0xb07ax15 + 1))['html'](''), _0xb07ax3['annotedPage'] = null
                        }
                    }
                }
            }, _0xb07ax6['prototype']['getPage'] = function(_0xb07ax4, _0xb07ax5, _0xb07ax6) {
                var _0xb07ax7, _0xb07ax8, _0xb07axa, _0xb07axb, _0xb07axc = this,
                    _0xb07axd = _0xb07ax4 = parseInt(_0xb07ax4, 10),
                    _0xb07axf = _0xb07axc['contentSource'];
                _0xb07ax4 <= 0 && _0xb07ax4 >= _0xb07axc['pageCount'] ? _0xb07axc['setPage'](_0xb07ax4, _0xb07ax9['textureLoadFallback'], _0xb07ax5, _0xb07ax6) : _0xb07axc['contentSourceType'] == _0xb07axe['PDF'] ? null != _0xb07axc['getCache'](_0xb07ax4, _0xb07ax6) ? (_0xb07axc['setPage'](_0xb07ax4, _0xb07axc['getCache'](_0xb07ax4, _0xb07ax6), _0xb07ax5, _0xb07ax6), _0xb07ax1c('Page ' + _0xb07ax4 + ' loaded from cache')) : (!0 !== _0xb07ax6 && _0xb07axc['setLoading'](_0xb07ax4, !0), _0xb07axc['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax4 > 2 && (_0xb07axd = Math['ceil']((_0xb07ax4 - 1) / 2) + 1), _0xb07axf['getPage'](_0xb07axd, _0xb07ax6)['then'](function(_0xb07ax7) {
                    ! function(_0xb07ax4, _0xb07ax5, _0xb07ax6, _0xb07ax7) {
                        var _0xb07ax8 = _0xb07axc['options']['forceFit'],
                            _0xb07ax9 = _0xb07axc['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax5 > 1 && _0xb07ax5 < _0xb07axc['pageCount'],
                            _0xb07axa = _0xb07ax9 && _0xb07ax8 ? 2 : 1,
                            _0xb07axb = _0xb07ax8 ? _0xb07ax4['getViewport'](1) : _0xb07axc['normalViewport'],
                            _0xb07axd = _0xb07axc['cacheIndex'] / Math['max'](_0xb07axb['width'] / _0xb07axa, _0xb07axb['height']);
                        1 == _0xb07axc['webgl'] && (_0xb07axd = _0xb07ax1d(_0xb07axc['cacheIndex']) / (_0xb07axc['pageRatio'] > 1 ? _0xb07axb['width'] / _0xb07axa : _0xb07axb['height']));
                        var _0xb07axe = document['createElement']('canvas'),
                            _0xb07axf = performance['now'](),
                            _0xb07ax10 = _0xb07axc['cacheIndex'],
                            _0xb07ax11 = _0xb07axe['getContext']('2d');
                        1 == _0xb07ax7 && (_0xb07axd = _0xb07axc['thumbsize'] / _0xb07axc['normalViewport']['height']);
                        _0xb07axe['height'] = Math['round'](_0xb07axb['height'] * _0xb07axd), _0xb07axe['width'] = Math['round'](_0xb07axb['width'] / _0xb07axa * _0xb07axd), 'css' == _0xb07axc['targetObject']['mode'] && Math['abs'](_0xb07axc['targetObject']['zoomHeight'] - _0xb07axe['height']) < 2 && (_0xb07axe['height'] = _0xb07axc['targetObject']['zoomHeight'] + 0, _0xb07axe['width'] = _0xb07axc['targetObject']['zoomWidth'] + 0);
                        _0xb07axb = _0xb07ax4['getViewport'](_0xb07axd), _0xb07ax1c('rendering ' + _0xb07ax5 + ' at ' + _0xb07axe['width'] + 'x' + _0xb07axe['height']), _0xb07ax9 && (_0xb07ax24(_0xb07axc['targetObject']) ? _0xb07ax5 % 2 == 0 && (_0xb07axb['transform'][4] = -_0xb07axe['width']) : _0xb07ax5 % 2 == 1 && (_0xb07axb['transform'][4] = -_0xb07axe['width']));
                        var _0xb07ax12 = {
                            canvasContext: _0xb07ax11,
                            viewport: _0xb07axb
                        };
                        _0xb07ax4['cleanupAfterRender'] = !0, _0xb07ax4['render'](_0xb07ax12)['promise']['then'](function() {
                            _0xb07ax1c(performance['now']() - _0xb07axf), _0xb07axf = performance['now'](), 1 == _0xb07ax7 || 1 == _0xb07axc['options']['canvasToBlob'] && !0 !== _0xb07axc['webgl'] ? _0xb07axe['toBlob'](function(_0xb07ax4) {
                                var _0xb07ax8 = _0xb07ax3['createObjectURL'](_0xb07ax4, 'image/jpeg');
                                _0xb07ax1c(performance['now']() - _0xb07axf), _0xb07axc['setCache'](_0xb07ax5, _0xb07ax8, _0xb07ax7, _0xb07ax10), _0xb07axc['setPage'](_0xb07ax5, _0xb07ax8, _0xb07ax6, _0xb07ax7)
                            }, 'image/jpeg', _0xb07axc['pdfRenderQuality']) : (_0xb07ax1c('Setting Page ' + _0xb07ax5), _0xb07axc['setPage'](_0xb07ax5, _0xb07axe, _0xb07ax6, _0xb07ax7)), _0xb07ax12 = null
                        })
                    }(_0xb07ax7, _0xb07ax4, _0xb07ax5, _0xb07ax6)
                })) : _0xb07axc['contentSourceType'] != _0xb07axe['IMAGE'] && _0xb07axc['contentSourceType'] != _0xb07axe['HTML'] || (null != _0xb07axc['getCache'](_0xb07ax4, _0xb07ax6) ? (_0xb07axc['setPage'](_0xb07ax4, _0xb07axc['getCache'](_0xb07ax4, _0xb07ax6), _0xb07ax5, _0xb07ax6), _0xb07ax1c('Page ' + _0xb07ax4 + ' loaded from cache')) : (!0 !== _0xb07ax6 && _0xb07axc['setLoading'](_0xb07ax4, !0), _0xb07axc['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax4 > 2 && (_0xb07axd = Math['ceil']((_0xb07ax4 - 1) / 2) + 1), _0xb07ax7 = _0xb07axf[_0xb07axd - 1], _0xb07ax8 = function(_0xb07ax3) {
                    _0xb07axc['setCache'](_0xb07ax4, _0xb07ax3, _0xb07ax6, _0xb07axc['cacheIndex']), _0xb07axc['setPage'](_0xb07ax4, _0xb07ax3, _0xb07ax5, _0xb07ax6), null != _0xb07ax5 && _0xb07ax5()
                }, _0xb07axa = _0xb07axc['isCrossOrigin'], (_0xb07axb = new Image)['crossOrigin'] = 'Anonymous', _0xb07axb['onload'] = function() {
                    if (1 == _0xb07axa) {
                        var _0xb07ax4 = document['createElement']('canvas'),
                            _0xb07ax5 = _0xb07ax4['getContext']('2d');
                        _0xb07ax4['width'] = _0xb07axb['width'], _0xb07ax4['height'] = _0xb07axb['height'], _0xb07ax5['drawImage'](_0xb07axb, 0, 0), 1 == _0xb07ax9['canvasToBlob'] ? _0xb07ax4['toBlob'](function(_0xb07ax4) {
                            var _0xb07ax5 = _0xb07ax3['createObjectURL'](_0xb07ax4, 'image/jpeg');
                            null != _0xb07ax8 && _0xb07ax8(_0xb07ax5)
                        }, 'image/jpeg', 0.85) : null != _0xb07ax8 && _0xb07ax8(_0xb07ax4)
                    } else {
                        null != _0xb07ax8 && _0xb07ax8(_0xb07ax7)
                    };
                    _0xb07axb['onload'] = null, _0xb07axb = null
                }, _0xb07axb['src'] = _0xb07ax7, (_0xb07axb['complete'] || void(0) === _0xb07axb['complete']) && (_0xb07axb['src'] = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', _0xb07axb['src'] = _0xb07ax7)))
            }, _0xb07ax6['prototype']['getTargetPage'] = function(_0xb07ax3) {}, _0xb07ax6['prototype']['setLoading'] = function(_0xb07ax3, _0xb07ax5) {
                if (null != this['targetObject']) {
                    if (1 == this['webgl']) {
                        var _0xb07ax6 = this['targetObject']['container'];
                        1 == _0xb07ax5 ? !0 !== _0xb07ax6['isLoading'] && (_0xb07ax6['addClass']('pdff-loading'), _0xb07ax6['isLoading'] = !0, _0xb07ax1c('Loading icon at ' + _0xb07ax3 + ' as ' + _0xb07ax5)) : null != _0xb07ax6['isLoading'] && (_0xb07ax6['removeClass']('pdff-loading'), _0xb07ax6['isLoading'] = null, _0xb07ax1c('Loading icon at ' + _0xb07ax3 + ' as ' + _0xb07ax5))
                    } else {
                        var _0xb07ax7 = _0xb07ax4(this['targetObject']['getContentLayer'](_0xb07ax3));
                        null != _0xb07ax7 && (1 == _0xb07ax5 ? _0xb07ax7['addClass']('pdff-page-loading') : _0xb07ax7['removeClass']('pdff-page-loading'), _0xb07ax1c('Loading icon at ' + _0xb07ax3 + ' as ' + _0xb07ax5))
                    }
                }
            }, _0xb07ax6['prototype']['getAnnotations'] = function(_0xb07ax5) {
                var _0xb07ax6 = this;
                if (0 != _0xb07ax6['options']['enableAnnotation']) {
                    var _0xb07ax7 = _0xb07ax6['targetObject'];
                    _0xb07ax5 = parseInt(_0xb07ax5, 10);
                    var _0xb07ax8 = _0xb07ax6['contentSource'],
                        _0xb07ax9 = _0xb07ax4(_0xb07ax7['getContentLayer'](_0xb07ax5));
                    if (_0xb07ax9['empty'](), _0xb07ax5 > 0 && _0xb07ax5 <= _0xb07ax6['pageCount']) {
                        if (_0xb07ax6['contentSourceType'] == _0xb07axe['PDF']) {
                            _0xb07ax1f(_0xb07ax5);
                            var _0xb07axa = _0xb07ax5;
                            _0xb07ax6['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax5 > 2 && (_0xb07axa = Math['ceil']((_0xb07ax5 - 1) / 2) + 1), _0xb07ax8['getPage'](_0xb07axa)['then'](function(_0xb07ax3) {
                                null != _0xb07ax9 && _0xb07ax9['length'] > 0 && _0xb07ax6['setupAnnotations'](_0xb07ax3, _0xb07ax6['viewport'], _0xb07ax9, _0xb07ax5)
                            })
                        };
                        if (null != _0xb07ax6['links'] && null != _0xb07ax6['links'][_0xb07ax5]) {
                            for (var _0xb07axb = _0xb07ax6['links'][_0xb07ax5], _0xb07axc = 0; _0xb07axc < _0xb07axb['length']; _0xb07axc++) {
                                var _0xb07axd, _0xb07axf = _0xb07axb[_0xb07axc];
                                _0xb07axf['dest'] && _0xb07axf['dest']['indexOf'] && 0 == _0xb07axf['dest']['indexOf']('[html]') ? ((_0xb07axd = document['createElement']('div'))['innerHTML'] = _0xb07axf['dest']['substr'](6), _0xb07axd['className'] = 'customHtmlAnnotation') : ((_0xb07axd = document['createElement']('a'))['setAttribute']('dest', _0xb07axf['dest']), _0xb07axd['className'] = 'customLinkAnnotation', _0xb07axd['href'] = '#' + _0xb07axf['dest'], _0xb07axd['onclick'] = function() {
                                    var _0xb07ax3 = this['getAttribute']('dest');
                                    return _0xb07ax3 && _0xb07ax6['linkService']['customNavigateTo'](_0xb07ax3), !1
                                }), _0xb07axd['style']['left'] = _0xb07axf['x'] + '%', _0xb07axd['style']['top'] = _0xb07axf['y'] + '%', _0xb07axd['style']['width'] = _0xb07axf['w'] + '%', _0xb07axd['style']['height'] = _0xb07axf['h'] + '%', _0xb07ax9[0]['appendChild'](_0xb07axd)
                            }
                        };
                        if (null != _0xb07ax6['html'] && null != _0xb07ax6['html'][_0xb07ax5]) {
                            var _0xb07ax10 = _0xb07ax6['html'][_0xb07ax5];
                            _0xb07ax9['append'](_0xb07ax4('<div class=\'customHTMLAnnotation\'>')['html'](_0xb07ax10))
                        }
                    }
                }
            }, _0xb07ax6['prototype']['setPage'] = function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6) {
                var _0xb07ax7 = this,
                    _0xb07ax8 = _0xb07ax7['targetObject'],
                    _0xb07axa = _0xb07ax24(_0xb07ax8),
                    _0xb07axb = _0xb07ax23(_0xb07ax8);
                if (1 == _0xb07ax6) {
                    _0xb07ax7['targetObject']['container']['find']('#pdff-thumb' + _0xb07ax3)['css']({
                        backgroundImage: _0xb07ax17(_0xb07ax4)
                    })
                } else {
                    _0xb07ax4 == _0xb07ax9['textureLoadFallback'] && _0xb07ax1c('Fallback on ' + _0xb07ax3);
                    var _0xb07axc = _0xb07ax8['getPageByNumber'](_0xb07ax3);
                    null != _0xb07axc ? _0xb07ax3 % 2 != 0 && !_0xb07axa || _0xb07ax3 % 2 != 1 && _0xb07axa && !_0xb07axb || _0xb07axb && !_0xb07axa ? (_0xb07ax1c(_0xb07ax3 + 'rendered to back of ' + _0xb07axc['color']), _0xb07axc['backImage'](_0xb07ax4, function(_0xb07ax4, _0xb07ax6) {
                        _0xb07axc['backTextureLoaded'] = !0, _0xb07ax7['setLoading'](_0xb07ax3), _0xb07ax7['requiresImageTextureScaling'] && _0xb07ax6 && 1 != _0xb07ax3 && _0xb07ax3 != _0xb07ax7['pageCount'] && (_0xb07ax6['repeat']['x'] = 0.5, _0xb07ax6['offset']['x'] = 0.5), null != _0xb07ax5 && _0xb07ax5()
                    })) : (_0xb07ax1c(_0xb07ax3 + 'rendered to front of ' + _0xb07axc['color']), _0xb07axc['frontImage'](_0xb07ax4, function(_0xb07ax4, _0xb07ax6) {
                        _0xb07axc['frontTextureLoaded'] = !0, _0xb07ax7['setLoading'](_0xb07ax3), _0xb07ax7['requiresImageTextureScaling'] && _0xb07ax6 && 1 != _0xb07ax3 && _0xb07ax3 != _0xb07ax7['pageCount'] && (_0xb07ax6['repeat']['x'] = 0.5), null != _0xb07ax5 && _0xb07ax5()
                    })) : _0xb07ax1c('Invalid set request on Page ' + _0xb07ax3)
                }
            }, _0xb07ax6['prototype']['setupAnnotations'] = function(_0xb07ax5, _0xb07ax6, _0xb07ax7, _0xb07ax8) {
                if (null != _0xb07ax7 && 0 != _0xb07ax4(_0xb07ax7)['length']) {
                    var _0xb07ax9 = this;
                    return _0xb07ax5['getAnnotations']()['then'](function(_0xb07axa) {
                        if (_0xb07ax6 = _0xb07ax6['clone']({
                                dontFlip: !0
                            }), _0xb07ax9['options']['pageSize'], _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'], null != _0xb07ax7) {
                            0 == (_0xb07ax7 = _0xb07ax4(_0xb07ax7))['find']('.annotationDiv')['length'] && _0xb07ax7['append'](_0xb07ax4('<div class=\'annotationDiv\'>'));
                            var _0xb07axb = _0xb07ax7['find']('.annotationDiv');
                            _0xb07axb['empty'](), _0xb07ax9['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax8 > 2 && _0xb07ax8 % 2 == 1 ? _0xb07axb['css']({
                                left: '-100%'
                            }) : 1 == _0xb07ax8 && _0xb07axb['css']({
                                left: ''
                            }), PDFJS['AnnotationLayer']['render']({
                                annotations: _0xb07axa,
                                div: _0xb07axb[0],
                                page: _0xb07ax5,
                                viewport: _0xb07ax6,
                                linkService: _0xb07ax9['linkService']
                            }), _0xb07ax9['options']['annotationClass'] && '' !== _0xb07ax9['options']['annotationClass'] && _0xb07axb['find'](' > section')['addClass'](_0xb07ax9['options']['annotationClass'])
                        }
                    })
                }
            }, _0xb07ax6
        }(),
        _0xb07ax2f = function() {
            function _0xb07ax5(_0xb07ax3) {
                this['angles'] = _0xb07ax3['angles'] || [0, 0, 0, 0, 0, 0], this['stiffness'] = _0xb07ax3['angles'] || 0.1, this['segments'] = _0xb07ax3['segments'] || 1, this['canvasMode'] = _0xb07ax3['contentSourceType'] !== _0xb07axe['IMAGE'] && 0 == _0xb07ax3['canvasToBlob'], this['initDOM']()
            }

            function _0xb07ax6(_0xb07ax3) {
                var _0xb07ax5 = _0xb07ax3['contentLayer'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: 'pdff-page-content'
                });
                _0xb07ax3['append'](_0xb07ax5)
            }
            return _0xb07ax5['prototype'] = {
                initDOM: function() {
                    var _0xb07ax3 = this['element'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'ppdff-flipbook-page'
                        }),
                        _0xb07ax5 = this['wrapper'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'pdff-page-wrapper'
                        }),
                        _0xb07ax7 = this['front'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'pdff-page-front'
                        }),
                        _0xb07ax8 = this['back'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'pdff-page-back'
                        }),
                        _0xb07ax9 = this['foldInnerShadow'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'pdff-page-fold-inner-shadow'
                        }),
                        _0xb07axa = this['foldOuterShadow'] = _0xb07ax4(_0xb07ax11['div'], {
                            class: 'pdff-page-fold-outer-shadow'
                        });
                    this['frontIMG'] = new Image, this['backIMG'] = new Image, _0xb07ax6(_0xb07ax7, this['segments']), _0xb07ax6(_0xb07ax8, this['segments']), _0xb07ax3['append'](_0xb07ax5)['append'](_0xb07axa), _0xb07ax5['append'](_0xb07ax7)['append'](_0xb07ax8)['append'](_0xb07ax9)
                },
                updatePoint: function(_0xb07ax4) {
                    if (null != _0xb07ax4) {
                        var _0xb07ax5 = null != this['parent']['dragPage'] ? this['parent']['dragPage'] : null != _0xb07ax4['page'] ? _0xb07ax4['page'] : this,
                            _0xb07ax6 = _0xb07ax5['element']['width'](),
                            _0xb07ax7 = _0xb07ax5['element']['height'](),
                            _0xb07ax8 = null != this['parent']['corner'] ? this['parent']['corner'] : _0xb07ax4['corner'],
                            _0xb07ax9 = _0xb07ax3['CORNERS'],
                            _0xb07axa = _0xb07ax5['side'] == _0xb07axf['right'],
                            _0xb07axb = _0xb07ax8 == _0xb07ax9['BL'] || _0xb07ax8 == _0xb07ax9['BR'];
                        _0xb07ax4['rx'] = 1 == _0xb07axa ? 2 * _0xb07ax6 - _0xb07ax4['x'] : _0xb07ax4['x'], _0xb07ax4['ry'] = 1 == _0xb07axb ? _0xb07ax7 - _0xb07ax4['y'] : _0xb07ax4['y'];
                        var _0xb07axc = Math['atan2'](_0xb07ax4['ry'], _0xb07ax4['rx']);
                        _0xb07axc = Math['PI'] / 2 - _0xb07ax18(_0xb07axc, 0, _0xb07ax13(90));
                        var _0xb07axd = _0xb07axa ? _0xb07ax4['x'] / 2 : _0xb07ax6 - _0xb07ax4['x'] / 2,
                            _0xb07axe = _0xb07ax4['ry'] / 2,
                            _0xb07ax10 = Math['max'](0, Math['sin'](_0xb07axc - Math['atan2'](_0xb07axe, _0xb07axd)) * _0xb07ax19(_0xb07axd, _0xb07axe)),
                            _0xb07ax11 = 0.5 * _0xb07ax19(_0xb07ax4['rx'], _0xb07ax4['ry']),
                            _0xb07ax12 = Math['round'](_0xb07ax6 - _0xb07ax10 * Math['sin'](_0xb07axc)),
                            _0xb07ax17 = Math['round'](_0xb07ax10 * Math['cos'](_0xb07axc)),
                            _0xb07ax1a = _0xb07ax14(_0xb07axc),
                            _0xb07ax1b = _0xb07axb ? _0xb07axa ? 90 - _0xb07ax1a + 180 : 180 + _0xb07ax1a : _0xb07axa ? _0xb07ax1a : 90 - _0xb07ax1a,
                            _0xb07ax1c = _0xb07axb ? _0xb07axa ? 90 - _0xb07ax1a + 180 : _0xb07ax1a : _0xb07axa ? _0xb07ax1a + 180 : _0xb07ax1b,
                            _0xb07ax1d = _0xb07axb ? _0xb07axa ? 90 - _0xb07ax1a : _0xb07ax1a + 90 : _0xb07axa ? _0xb07ax1b - 90 : _0xb07ax1b + 180,
                            _0xb07ax1e = _0xb07axa ? _0xb07ax6 - _0xb07ax12 : _0xb07ax12,
                            _0xb07ax1f = _0xb07axb ? _0xb07ax7 + _0xb07ax17 : -_0xb07ax17,
                            _0xb07ax20 = _0xb07axa ? -_0xb07ax12 : _0xb07ax12 - _0xb07ax6,
                            _0xb07ax21 = _0xb07axb ? -_0xb07ax7 - _0xb07ax17 : _0xb07ax17,
                            _0xb07ax23 = _0xb07ax18(0.5 * _0xb07ax4['distance'] / _0xb07ax6, 0, 0.5),
                            _0xb07ax24 = _0xb07ax18(0.5 * (2 * _0xb07ax6 - _0xb07ax4['rx']) / _0xb07ax6, 0.05, 0.3);
                        _0xb07ax5['element']['addClass']('pdff-folding');
                        var _0xb07ax25 = _0xb07axa ? _0xb07ax5['back'] : _0xb07ax5['front'],
                            _0xb07ax26 = _0xb07axa ? _0xb07ax5['front'] : _0xb07ax5['back'],
                            _0xb07ax27 = _0xb07ax5['foldOuterShadow'],
                            _0xb07ax28 = _0xb07ax5['foldInnerShadow'];
                        _0xb07ax5['wrapper']['css']({
                            transform: _0xb07ax15(_0xb07ax1e, _0xb07ax1f) + _0xb07ax16(_0xb07ax1b)
                        }), _0xb07ax25['css']({
                            transform: _0xb07ax16(-_0xb07ax1b) + _0xb07ax15(-_0xb07ax1e, -_0xb07ax1f)
                        }), _0xb07ax26['css']({
                            transform: _0xb07ax16(_0xb07ax1c) + _0xb07ax15(_0xb07ax20, _0xb07ax21),
                            boxShadow: 'rgba(0, 0, 0, ' + _0xb07ax23 + ') 0px 0px 20px'
                        }), _0xb07ax28['css']({
                            transform: _0xb07ax16(_0xb07ax1c) + _0xb07ax15(_0xb07ax20, _0xb07ax21),
                            opacity: _0xb07ax24 / 2,
                            backgroundImage: _0xb07ax22['css'] + 'linear-gradient( ' + _0xb07ax1d + 'deg, rgba(0, 0, 0, 0.25) , rgb(0, 0, 0) ' + 0.7 * _0xb07ax11 + 'px, rgb(255, 255, 255) ' + _0xb07ax11 + 'px)'
                        }), _0xb07ax27['css']({
                            opacity: _0xb07ax24 / 2,
                            left: _0xb07axa ? 'auto' : 0,
                            right: _0xb07axa ? 0 : 'auto',
                            backgroundImage: _0xb07ax22['css'] + 'linear-gradient( ' + (180 - _0xb07ax1d) + 'deg, rgba(0, 0, 0,0) ' + _0xb07ax11 / 3 + 'px, rgb(0, 0, 0) ' + _0xb07ax11 + 'px)'
                        })
                    }
                },
                updateAngle: function(_0xb07ax3, _0xb07ax4) {
                    var _0xb07ax5 = 5 * this['element']['width']();
                    this['wrapper']['css']({
                        perspective: _0xb07ax5,
                        perspectiveOrigin: 1 == _0xb07ax4 ? '0% 50%' : '100% 50%'
                    }), this['front']['css']({
                        display: 1 == _0xb07ax4 ? _0xb07ax3 <= -90 ? 'block' : 'none' : _0xb07ax3 < 90 ? 'block' : 'none',
                        transform: ('MfS' !== _0xb07ax22['dom'] ? '' : 'perspective(' + _0xb07ax5 + 'px) ') + (1 == _0xb07ax4 ? 'translateX(-100%) ' : '') + 'rotateY(' + ((1 == _0xb07ax4 ? 180 : 0) + _0xb07ax3) + 'deg)'
                    }), this['back']['css']({
                        display: 1 == _0xb07ax4 ? _0xb07ax3 > -90 ? 'block' : 'none' : _0xb07ax3 >= 90 ? 'block' : 'none',
                        transform: ('MSd' !== _0xb07ax22['dom'] ? '' : 'perspective(' + _0xb07ax5 + 'px) ') + (0 == _0xb07ax4 ? 'translateX(100%) ' : '') + 'rotateY(' + ((0 == _0xb07ax4 ? -180 : 0) + _0xb07ax3) + 'deg)'
                    })
                },
                tween: function(_0xb07ax4) {
                    var _0xb07ax5 = this;
                    if (null != _0xb07ax5 && null != _0xb07ax5['parent']) {
                        var _0xb07ax6, _0xb07ax7 = _0xb07ax23(_0xb07ax5['parent']),
                            _0xb07ax8 = _0xb07ax5['side'] == _0xb07axf['right'],
                            _0xb07ax9 = _0xb07ax5['parent']['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                            _0xb07axa = _0xb07ax5['parent']['corner'] == _0xb07ax3['CORNERS']['BL'] || _0xb07ax5['parent']['corner'] == _0xb07ax3['CORNERS']['BR'],
                            _0xb07axb = 1 == _0xb07ax5['magnetic'],
                            _0xb07axc = _0xb07axa ? _0xb07ax5['parent']['height'] : 0,
                            _0xb07axd = 0,
                            _0xb07axe = _0xb07ax5['end'] = _0xb07ax5 && 1 == _0xb07ax5['animateToReset'] ? {
                                x: _0xb07ax8 ? _0xb07ax5['parent']['fullWidth'] : 0,
                                y: _0xb07axc
                            } : {
                                x: _0xb07ax8 ? 0 : _0xb07ax5['parent']['fullWidth'],
                                y: _0xb07axc
                            };
                        _0xb07ax5['ease'] = _0xb07ax5['isHard'] ? TWEEN['Easing']['Quadratic']['InOut'] : TWEEN['Easing']['Linear']['None'];
                        var _0xb07ax10 = _0xb07ax5['parent']['duration'];
                        1 == _0xb07ax5['isHard'] ? (null != _0xb07ax4 && (_0xb07axd = _0xb07ax1b(_0xb07ax4['distance'], _0xb07ax4['fullWidth'])), _0xb07ax6 = _0xb07ax5['init'] = {
                            angle: _0xb07axd * (_0xb07ax8 ? -1 : 1)
                        }, _0xb07axe = _0xb07ax5['end'] = _0xb07ax5 && 1 == _0xb07ax5['animateToReset'] ? {
                            angle: _0xb07ax8 ? 0 : -0
                        } : {
                            angle: _0xb07ax8 ? -180 : 180
                        }) : null == _0xb07ax4 ? (_0xb07ax6 = _0xb07ax5['init'] = _0xb07ax5 && 1 == _0xb07ax5['animateToReset'] ? {
                            x: _0xb07ax8 ? 0 : _0xb07ax5['parent']['fullWidth'],
                            y: 0
                        } : {
                            x: _0xb07ax8 ? _0xb07ax5['parent']['fullWidth'] : 0,
                            y: 0
                        }, _0xb07ax5['first'] = {
                            x: (_0xb07ax8 ? 3 : 1) * _0xb07ax5['parent']['fullWidth'] / 4,
                            y: 0
                        }, _0xb07ax5['mid'] = {
                            x: (_0xb07ax8 ? 1 : 3) * _0xb07ax5['parent']['fullWidth'] / 4,
                            y: 0
                        }) : (_0xb07ax6 = _0xb07ax5['init'] = {
                            x: _0xb07ax4['x'],
                            y: _0xb07ax4['y'],
                            opacity: 1
                        }, _0xb07ax5['first'] = {
                            x: 3 * _0xb07ax4['x'] / 4,
                            y: 3 * _0xb07ax4['y'] / 4,
                            opacity: 1
                        }, _0xb07ax5['mid'] = {
                            x: _0xb07ax4['x'] / 4,
                            y: _0xb07ax4['y'] / 4,
                            opacity: 1
                        }, _0xb07ax10 = _0xb07ax5['parent']['duration'] * _0xb07ax1a(_0xb07ax6['x'], _0xb07ax6['y'], _0xb07axe['x'], _0xb07axe['y']) / _0xb07ax5['parent']['fullWidth'], _0xb07ax10 = _0xb07ax18(_0xb07ax10, _0xb07ax5['parent']['duration'] / 3, _0xb07ax5['parent']['duration'])), _0xb07ax6['index'] = 0, _0xb07axe['index'] = 1, _0xb07ax5['isFlipping'] = !0;
                        var _0xb07ax11 = function(_0xb07ax3) {
                            1 == _0xb07ax5['isHard'] ? (_0xb07ax5['updateAngle'](_0xb07ax3['angle'], _0xb07ax8), _0xb07ax5['angle'] = _0xb07ax3['angle']) : (_0xb07ax5['updatePoint']({
                                x: _0xb07ax3['x'],
                                y: _0xb07ax3['y']
                            }), _0xb07ax5['x'] = _0xb07ax3['x'], _0xb07ax5['y'] = _0xb07ax3['y']), _0xb07ax7 && !_0xb07axb && (_0xb07ax5['element'][0]['style']['opacity'] = _0xb07ax8 && !_0xb07ax9 || !_0xb07ax8 && _0xb07ax9 ? _0xb07ax3['index'] > 0.5 ? 2 * (1 - _0xb07ax3['index']) : 1 : _0xb07ax3['index'] < 0.5 ? 2 * _0xb07ax3['index'] : 1)
                        };
                        _0xb07ax7 && (!_0xb07ax8 && !_0xb07ax9 || _0xb07ax8 && _0xb07ax9) && (_0xb07ax5['element'][0]['style']['opacity'] = 0);
                        _0xb07ax5['completeTween'] = _0xb07ax5['completeTween'] || function(_0xb07ax4) {
                            _0xb07ax5['isFlipping'] = !1, 1 == _0xb07ax5['isHard'] ? (_0xb07ax5['updateAngle'](_0xb07ax5['end']['angle']), _0xb07ax5['back']['css']({
                                display: 'block'
                            }), _0xb07ax5['front']['css']({
                                display: 'block'
                            })) : _0xb07ax5['updatePoint']({
                                x: _0xb07ax5['end']['x'],
                                y: _0xb07ax5['end']['y']
                            }), _0xb07ax5['element'][0]['style']['opacity'] = 1, !0 !== _0xb07ax5['animateToReset'] ? _0xb07ax5['side'] = _0xb07ax5['side'] == _0xb07axf['right'] ? _0xb07axf['left'] : _0xb07axf['right'] : _0xb07ax5['animateToReset'] = null, _0xb07ax5['currentTween'] = null, _0xb07ax5['pendingPoint'] = null, _0xb07ax5['magnetic'] = !1, _0xb07ax5['parent']['dragPage'] = null, _0xb07ax5['parent']['corner'] = _0xb07ax3['CORNERS']['NONE'], 1 != _0xb07ax4 && _0xb07ax5['parent']['refresh']()
                        };
                        1 == _0xb07ax5['isHard'] ? _0xb07ax5['currentTween'] = new TWEEN.Tween(_0xb07ax6)['delay'](0)['to'](_0xb07axe, _0xb07ax5['parent']['duration'])['onUpdate'](function() {
                            _0xb07ax11(this)
                        })['easing'](_0xb07ax5['ease'])['onComplete'](_0xb07ax5['completeTween'])['start']() : null == _0xb07ax4 ? _0xb07ax5['currentTween'] = new TWEEN.Tween(_0xb07ax6)['delay'](0)['to'](_0xb07axe, _0xb07ax5['parent']['duration'])['onUpdate'](function() {
                            _0xb07ax11(this)
                        })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](_0xb07ax5['completeTween'])['start']() : (_0xb07ax5['currentTween'] = new TWEEN.Tween(_0xb07ax6)['delay'](0)['to'](_0xb07axe, _0xb07ax10)['onUpdate'](function() {
                            _0xb07ax11(this)
                        })['easing'](TWEEN['Easing']['Sinusoidal'].Out)['onComplete'](_0xb07ax5['completeTween']), _0xb07ax5['currentTween']['start']())
                    }
                },
                frontImage: function(_0xb07ax3, _0xb07ax5) {
                    var _0xb07ax6 = this;

                    function _0xb07ax7() {
                        _0xb07ax6['front']['css']({
                            backgroundImage: _0xb07ax17(_0xb07ax3)
                        }), null != _0xb07ax5 && _0xb07ax5()
                    }
                    1 == _0xb07ax6['canvasMode'] ? (_0xb07ax6['front']['find']('>canvas')['remove'](), _0xb07ax3 !== _0xb07ax9['textureLoadFallback'] && _0xb07ax6['front']['append'](_0xb07ax4(_0xb07ax3)), null != _0xb07ax5 && _0xb07ax5()) : _0xb07ax3 == _0xb07ax9['textureLoadFallback'] ? _0xb07ax7() : (_0xb07ax6['frontIMG']['onload'] = _0xb07ax7, _0xb07ax6['frontIMG']['src'] = _0xb07ax3)
                },
                backImage: function(_0xb07ax3, _0xb07ax5) {
                    var _0xb07ax6 = this;

                    function _0xb07ax7() {
                        _0xb07ax6['back']['css']({
                            backgroundImage: _0xb07ax17(_0xb07ax3)
                        }), null != _0xb07ax5 && _0xb07ax5()
                    }
                    1 == _0xb07ax6['canvasMode'] ? (_0xb07ax6['back']['find']('>canvas')['remove'](), _0xb07ax3 !== _0xb07ax9['textureLoadFallback'] && _0xb07ax6['back']['append'](_0xb07ax4(_0xb07ax3)), null != _0xb07ax5 && _0xb07ax5()) : _0xb07ax3 == _0xb07ax9['textureLoadFallback'] ? _0xb07ax7() : (_0xb07ax6['backIMG']['onload'] = _0xb07ax7, _0xb07ax6['backIMG']['src'] = _0xb07ax3)
                },
                updateCSS: function(_0xb07ax3) {
                    this['element']['css'](_0xb07ax3)
                },
                resetCSS: function() {
                    this['wrapper']['css']({
                        transform: ''
                    }), this['front']['css']({
                        transform: '',
                        boxShadow: ''
                    }), this['back']['css']({
                        transform: '',
                        boxShadow: ''
                    })
                },
                clearTween: function(_0xb07ax3) {
                    this['currentTween']['stop'](), this['completeTween'](1 == _0xb07ax3), this['resetCSS']()
                }
            }, _0xb07ax5
        }(),
        _0xb07ax30 = function(_0xb07ax5) {
            function _0xb07ax6(_0xb07ax3) {
                for (var _0xb07ax4 = !1, _0xb07ax5 = 0; _0xb07ax5 < _0xb07ax3['pages']['length']; _0xb07ax5++) {
                    if (1 == _0xb07ax3['pages'][_0xb07ax5]['isFlipping']) {
                        _0xb07ax4 = !0;
                        break
                    }
                };
                return _0xb07ax4
            }

            function _0xb07ax7(_0xb07ax5, _0xb07ax7) {
                var _0xb07ax8 = this;

                function _0xb07ax9(_0xb07ax3) {
                    _0xb07ax8['dragPage'] != _0xb07ax3['page'] && 1 == _0xb07ax3['page']['visible'] && (_0xb07ax8['dragPage']['clearTween'](!0), _0xb07ax8['dragPage'] = _0xb07ax3['page'], _0xb07ax8['corner'] = _0xb07ax3['corner'], _0xb07ax8['dragPage']['pendingPoint'] = _0xb07ax3)
                }
                _0xb07ax8['type'] = 'BookCSS', _0xb07ax8['images'] = _0xb07ax5['images'] || [], _0xb07ax8['pageCount'] = _0xb07ax5['pageCount'] || 2, _0xb07ax8['foldSense'] = 50, _0xb07ax8['stackCount'] = 4, _0xb07ax8['mode'] = 'css', _0xb07ax8['pages'] = [], _0xb07ax8['duration'] = _0xb07ax5['duration'], _0xb07ax8['container'] = _0xb07ax4(_0xb07ax7), _0xb07ax8['options'] = _0xb07ax5, _0xb07ax8['drag'] = _0xb07axf['none'], _0xb07ax8['pageCount'] = 1 == _0xb07ax8['pageCount'] ? _0xb07ax8['pageCount'] : 2 * Math['ceil'](_0xb07ax8['pageCount'] / 2), _0xb07ax8['pageMode'] = _0xb07ax5['pageMode'] || (_0xb07ax25 || _0xb07ax8['pageCount'] <= 2 ? _0xb07ax3['PAGE_MODE']['SINGLE'] : _0xb07ax3['PAGE_MODE']['DOUBLE']), _0xb07ax8['singlePageMode'] = _0xb07ax5['singlePageMode'] || (_0xb07ax25 ? _0xb07ax3['SINGLE_PAGE_MODE']['BOOKLET'] : _0xb07ax3['SINGLE_PAGE_MODE']['ZOOM']), _0xb07ax8['swipe_threshold'] = _0xb07ax25 ? 15 : 50, _0xb07ax8['direction'] = _0xb07ax5['direction'] || _0xb07ax3['DIRECTION']['LTR'], _0xb07ax8['startPage'] = 1, _0xb07ax8['endPage'] = _0xb07ax8['pageCount'], _0xb07ax8['_activePage'] = _0xb07ax5['openPage'] || _0xb07ax8['startPage'], _0xb07ax8['hardConfig'] = _0xb07ax5['hard'], _0xb07axa = 'WebKitCSSMatrix' in window || document['body'] && 'MozPerspective' in document['body']['style'], _0xb07ax8['animateF'] = function() {
                    TWEEN['getAll']()['length'] > 0 ? TWEEN['update']() : clearInterval(_0xb07ax8['animate'])
                }, _0xb07ax8['init'](_0xb07ax5), _0xb07ax8['skipDrag'] = !1;
                var _0xb07axb = function(_0xb07ax4) {
                        var _0xb07ax5 = _0xb07ax8['eventToPoint'](_0xb07ax4);
                        if (null != _0xb07ax4['touches'] && 2 == _0xb07ax4['touches']['length'] && null != _0xb07ax8['startTouches']) {
                            _0xb07ax8['zoomDirty'] = !0;
                            var _0xb07ax7 = _0xb07axd['getVectorAvg'](_0xb07axd['getTouches'](_0xb07ax4, _0xb07ax8['container']['offset']())),
                                _0xb07ax9 = _0xb07axd['calculateScale'](_0xb07ax8['startTouches'], _0xb07axd['getTouches'](_0xb07ax4));
                            _0xb07ax8['lastScale'], _0xb07ax8['contentProvider']['zoomScale'], _0xb07ax7['x'], _0xb07ax7['y'];
                            _0xb07ax8['stage']['css']({
                                transform: 'translate3d(' + _0xb07ax8['left'] + 'px,' + _0xb07ax8['top'] + 'px,0) scale3d(' + _0xb07ax9 + ',' + _0xb07ax9 + ',1)'
                            }), _0xb07ax8['lastScale'] = _0xb07ax9, _0xb07ax8['lastZoomCenter'] = _0xb07ax7, _0xb07ax4['preventDefault']()
                        };
                        if (!(null != _0xb07ax4['touches'] && _0xb07ax4['touches']['length'] > 1 || null == _0xb07ax8['startPoint'] || null != _0xb07ax8['startTouches'])) {
                            var _0xb07axa = _0xb07ax8['dragPage'] || _0xb07ax5['page'];
                            if (1 !== _0xb07ax8['contentProvider']['zoomScale']) {
                                null == _0xb07ax4['touches'] && 1 != _0xb07ax8['isPanning'] || (_0xb07ax8['pan'](_0xb07ax5), _0xb07ax4['preventDefault']())
                            } else {
                                if (!0 !== _0xb07ax8['skipDrag']) {
                                    _0xb07ax5['distance'];
                                    if (!_0xb07ax6(_0xb07ax8)) {
                                        if (null != _0xb07ax8['dragPage'] || 1 == _0xb07ax5['isInside']) {
                                            null != _0xb07ax8['dragPage'] ? _0xb07ax1c('set mouse down move') : (_0xb07ax5['y'] = _0xb07ax18(_0xb07ax5['y'], 1, _0xb07ax8['height'] - 1), _0xb07ax5['x'] = _0xb07ax18(_0xb07ax5['x'], 1, _0xb07ax5['fullWidth'] - 1));
                                            var _0xb07axb = _0xb07ax8['corner'] || _0xb07ax5['corner'];
                                            if (_0xb07axa['isHard']) {
                                                var _0xb07axc = _0xb07axb == _0xb07ax3['CORNERS']['BR'] || _0xb07axb == _0xb07ax3['CORNERS']['TR'],
                                                    _0xb07axe = _0xb07ax1b(_0xb07ax5['distance'], _0xb07ax5['fullWidth']);
                                                _0xb07axa['updateAngle'](_0xb07axe * (_0xb07axc ? -1 : 1), _0xb07axc)
                                            } else {
                                                _0xb07axa['updatePoint'](_0xb07ax5, _0xb07ax8)
                                            };
                                            _0xb07axa['magnetic'] = !0, _0xb07axa['magneticCorner'] = _0xb07ax5['corner'], _0xb07ax4['preventDefault']()
                                        };
                                        if (null == _0xb07ax8['dragPage'] && null != _0xb07axa && 0 == _0xb07ax5['isInside'] && 1 == _0xb07axa['magnetic'] && (_0xb07axa['pendingPoint'] = _0xb07ax5, _0xb07axa['animateToReset'] = !0, _0xb07ax8['corner'] = _0xb07axa['magneticCorner'], _0xb07ax8['animatePage'](_0xb07axa), _0xb07axa['pendingPoint'] = null, _0xb07axa['magnetic'] = !1, _0xb07axa['magneticCorner'] = null), 1 == _0xb07ax8['isPanning'] && null == _0xb07ax8['dragPage'] && 1 == _0xb07ax8['contentProvider']['zoomScale']) {
                                            var _0xb07ax10 = _0xb07ax5['x'] - _0xb07ax8['lastPos'];
                                            performance['now'](), _0xb07ax8['lastTime'];
                                            Math['abs'](_0xb07ax10) > _0xb07ax8['swipe_threshold'] && (_0xb07ax10 < 0 ? _0xb07ax8['next']() : _0xb07ax8['prev'](), _0xb07ax8['drag'] = _0xb07axf['none'], _0xb07ax8['isPanning'] = !1, _0xb07ax4['preventDefault']()), _0xb07ax8['lastPos'] = _0xb07ax5['x'], _0xb07ax8['lastTime'] = performance['now']()
                                        }
                                    }
                                }
                            }
                        }
                    },
                    _0xb07axc = function(_0xb07ax4) {
                        if (null != _0xb07ax4['touches'] && 0 == _0xb07ax4['touches']['length']) {
                            _0xb07ax8['contentProvider']['zoomScale'];
                            1 == _0xb07ax8['zoomDirty'] && (_0xb07ax8['previewObject']['contentProvider']['zoomScale'] = _0xb07axd['limitAt'](_0xb07ax8['previewObject']['contentProvider']['zoomScale'] * _0xb07ax8['lastScale'], 1, _0xb07ax8['previewObject']['contentProvider']['maxZoom']), _0xb07ax8['previewObject']['zoomValue'] = 1 * _0xb07ax8['previewObject']['contentProvider']['zoomScale'], _0xb07ax8['previewObject']['resize'](), _0xb07ax8['zoomDirty'] = !1), _0xb07ax8['wrapper']['css']({
                                transform: ''
                            }), _0xb07ax8['lastScale'] = null, _0xb07ax8['startTouches'] = null
                        };
                        if (_0xb07ax8['isPanning'] = !1, !(null != _0xb07ax4['touches'] && _0xb07ax4['touches']['length'] > 1) && !0 !== _0xb07ax8['skipDrag']) {
                            var _0xb07ax5 = _0xb07ax8['eventToPoint'](_0xb07ax4);
                            _0xb07ax8['dragPage'] && (_0xb07ax4['preventDefault'](), _0xb07ax8['dragPage']['pendingPoint'] = _0xb07ax5, _0xb07ax5['x'] == _0xb07ax8['startPoint']['x'] && _0xb07ax5['y'] == _0xb07ax8['startPoint']['y'] && 1 == _0xb07ax5['isInside'] ? _0xb07ax8['corner'] == _0xb07ax3['CORNERS']['BR'] || _0xb07ax8['corner'] == _0xb07ax3['CORNERS']['TR'] ? (_0xb07ax9(_0xb07ax5), !0 !== _0xb07ax8['dragPage']['isFlipping'] && _0xb07ax8['next']()) : _0xb07ax8['corner'] != _0xb07ax3['CORNERS']['BL'] && _0xb07ax8['corner'] != _0xb07ax3['CORNERS']['TL'] || (_0xb07ax9(_0xb07ax5), !0 !== _0xb07ax8['dragPage']['isFlipping'] && _0xb07ax8['prev']()) : !0 !== _0xb07ax8['dragPage']['isFlipping'] && (_0xb07ax5['distance'] > _0xb07ax5['fullWidth'] / 2 ? _0xb07ax5['x'] > _0xb07ax5['fullWidth'] / 2 ? _0xb07ax8['prev']() : _0xb07ax8['next']() : (_0xb07ax8['dragPage']['animateToReset'] = !0, _0xb07ax8['animatePage'](_0xb07ax8['dragPage']))), _0xb07ax8['dragPage'] && (_0xb07ax8['dragPage']['pendingPoint'] = null, _0xb07ax8['dragPage']['magnetic'] = !1)), _0xb07ax8['drag'] = _0xb07axf['none']
                        }
                    },
                    _0xb07axe = function(_0xb07ax4) {
                        var _0xb07ax5 = _0xb07ax8['eventToPoint'](_0xb07ax4),
                            _0xb07ax6 = _0xb07ax4['srcElement'] || _0xb07ax4['originalTarget'];
                        _0xb07ax8['dragPage'] && _0xb07ax8['dragPage']['magnetic'] || _0xb07ax8['wrapper'][0]['contains'](_0xb07ax4['target']) && 1 == _0xb07ax8['contentProvider']['zoomScale'] && _0xb07ax5['x'] == _0xb07ax8['startPoint']['x'] && _0xb07ax5['y'] == _0xb07ax8['startPoint']['y'] && _0xb07ax5['isInsidePage'] && _0xb07ax8['startPoint']['page'] == _0xb07ax5['page'] && !_0xb07ax5['page']['isFlipping'] && 'A' !== _0xb07ax6['nodeName'] && (0 == _0xb07ax8['startPoint']['page']['side'] ? (_0xb07ax8['corner'] = _0xb07ax3['CORNERS']['TL'], _0xb07ax8['prev'](), _0xb07ax8['startPoint']['page'] = null) : (_0xb07ax8['corner'] = _0xb07ax3['CORNERS']['TR'], _0xb07ax8['next'](), _0xb07ax8['startPoint']['page'] = null), _0xb07ax8['isPanning'] = !1)
                    },
                    _0xb07ax10 = function(_0xb07ax4) {
                        if (null != _0xb07ax4['touches'] && 2 == _0xb07ax4['touches']['length'] && null == _0xb07ax8['startTouches'] && (_0xb07ax8['startTouches'] = _0xb07axd['getTouches'](_0xb07ax4), _0xb07ax8['lastScale'] = 1), !(null != _0xb07ax4['touches'] && _0xb07ax4['touches']['length'] > 1 || null == _0xb07ax4['touches'] && 0 !== _0xb07ax4['button'])) {
                            var _0xb07ax5, _0xb07ax7 = _0xb07ax8['eventToPoint'](_0xb07ax4);
                            _0xb07ax8['startPoint'] = _0xb07ax7, _0xb07ax8['left'] = _0xb07ax8['left'] || 0, _0xb07ax8['top'] = _0xb07ax8['top'] || 0, _0xb07ax8['isPanning'] = !0, _0xb07ax8['lastPos'] = _0xb07ax7['x'], _0xb07ax8['lastTime'] = performance['now'](), !0 !== _0xb07ax8['skipDrag'] && (1 != _0xb07ax7['isInside'] || _0xb07ax6(_0xb07ax8) || (_0xb07ax8['startPoint'] = _0xb07ax7, _0xb07ax8['drag'] = _0xb07ax7['drag'], _0xb07ax8['dragPage'] = _0xb07ax7['page'], _0xb07ax8['corner'] = _0xb07ax7['corner'], _0xb07ax1c(_0xb07ax8['corner']), (_0xb07ax5 = _0xb07ax8['dragPage'])['parent']['container']['find']('.pdff-folding')['removeClass']('pdff-folding'), _0xb07ax5['element']['addClass']('pdff-folding'), _0xb07ax7['page']['isHard'] || _0xb07ax7['page']['updatePoint'](_0xb07ax7, _0xb07ax8), '0' == _0xb07ax7['page']['name'] ? _0xb07ax8['shadow']['css']({
                                width: '50%',
                                left: _0xb07ax8['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? 0 : '50%',
                                transitionDelay: ''
                            }) : _0xb07ax7['page']['name'] == Math['ceil'](_0xb07ax8['pageCount'] / 2) - 1 && _0xb07ax8['shadow']['css']({
                                width: '50%',
                                left: _0xb07ax8['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? '50%' : 0,
                                transitionDelay: ''
                            })))
                        }
                    },
                    _0xb07ax11 = function(_0xb07ax3) {
                        var _0xb07ax4 = 0;
                        null != _0xb07ax3['wheelDelta'] ? _0xb07ax4 = _0xb07ax3['wheelDelta'] / 120 : null != _0xb07ax3['detail'] && (_0xb07ax4 = -_0xb07ax3['detail'] / 3);
                        var _0xb07ax5 = _0xb07ax8['contentProvider']['zoomScale'],
                            _0xb07ax6 = _0xb07ax8['contentProvider']['maxZoom'];
                        if (_0xb07ax4 && (_0xb07ax4 > 0 && _0xb07ax5 < _0xb07ax6 || _0xb07ax4 < 0 && _0xb07ax5 > 1)) {
                            _0xb07ax3['stopPropagation'](), _0xb07ax3['preventDefault']();
                            var _0xb07ax7 = _0xb07ax8['eventToPoint'](_0xb07ax3),
                                _0xb07ax9 = _0xb07ax8['eventToPoint'](_0xb07ax3),
                                _0xb07axa = _0xb07ax8['container']['width']() / 2,
                                _0xb07axb = _0xb07ax8['container']['height']() / 2 - 23;
                            _0xb07ax8['previewObject']['zoom'](_0xb07ax4);
                            var _0xb07axc = _0xb07ax8['contentProvider']['zoomScale'];
                            if (_0xb07ax5 !== _0xb07axc) {
                                var _0xb07axd = _0xb07axc / _0xb07ax5;
                                1 == _0xb07axc ? (_0xb07ax8['left'] = 0, _0xb07ax8['top'] = 0) : (_0xb07ax8['left'] *= _0xb07axd, _0xb07ax8['top'] *= _0xb07axd);
                                var _0xb07axe = (_0xb07ax7['raw']['x'] - _0xb07axa) * _0xb07axd,
                                    _0xb07axf = (_0xb07ax7['raw']['y'] - _0xb07axb) * _0xb07axd;
                                _0xb07ax9['raw']['x'] = _0xb07axa + _0xb07axe, _0xb07ax9['raw']['y'] = _0xb07axb + _0xb07axf, _0xb07ax8['startPoint'] = _0xb07ax9, _0xb07ax8['pan'](_0xb07ax7);
                                var _0xb07ax10 = _0xb07ax8['dragPage'] || _0xb07ax7['page'];
                                null == _0xb07ax8['dragPage'] && null != _0xb07ax10 && 1 == _0xb07ax7['isInside'] && 1 == _0xb07ax10['magnetic'] && (_0xb07ax10['pendingPoint'] = _0xb07ax7, _0xb07ax10['animateToReset'] = !0, _0xb07ax8['corner'] = _0xb07ax10['magneticCorner'], _0xb07ax8['animatePage'](_0xb07ax10), _0xb07ax10['pendingPoint'] = null, _0xb07ax10['magnetic'] = !1, _0xb07ax10['magneticCorner'] = null)
                            }
                        }
                    },
                    _0xb07ax12 = _0xb07ax8['container'][0],
                    _0xb07ax13 = _0xb07ax8['stage'][0];
                _0xb07ax12 && (_0xb07ax13['addEventListener']('mousemove', _0xb07axb, !1), _0xb07ax13['addEventListener']('touchmove', _0xb07axb, !1), _0xb07ax13['addEventListener']('mousedown', _0xb07ax10, !1), _0xb07ax13['addEventListener']('click', _0xb07axe, !1), _0xb07ax13['addEventListener']('mouseup', _0xb07axc, !1), _0xb07ax13['addEventListener']('touchend', _0xb07axc, !1), _0xb07ax13['addEventListener']('touchstart', _0xb07ax10, !1), 1 == _0xb07ax8['options']['scrollWheel'] && (_0xb07ax13['addEventListener']('mousewheel', _0xb07ax11, !1), _0xb07ax13['addEventListener']('DOMMouseScroll', _0xb07ax11, !1))), this['dispose'] = function() {
                    _0xb07ax13['removeEventListener']('mousemove', _0xb07axb, !1), _0xb07ax13['removeEventListener']('touchmove', _0xb07axb, !1), _0xb07ax13['removeEventListener']('mousedown', _0xb07ax10, !1), _0xb07ax13['removeEventListener']('click', _0xb07axe, !1), _0xb07ax13['removeEventListener']('mouseup', _0xb07axc, !1), _0xb07ax13['removeEventListener']('touchend', _0xb07axc, !1), _0xb07ax13['removeEventListener']('touchstart', _0xb07ax10, !1), 1 == _0xb07ax8['options']['scrollWheel'] && (_0xb07ax13['removeEventListener']('mousewheel', _0xb07ax11, !1), _0xb07ax13['removeEventListener']('DOMMouseScroll', _0xb07ax11, !1)), _0xb07ax8['updatePageCallback'] = null, _0xb07ax8['flipCallback'] = null, _0xb07ax8['animateF'] = null, _0xb07ax8['stage']['remove']()
                }
            }
            return _0xb07ax29(_0xb07ax7, {}), _0xb07ax7['prototype'] = {
                add: function(_0xb07ax3) {
                    _0xb07ax3 instanceof _0xb07ax2f ? this['container']['append'](_0xb07ax4(_0xb07ax3['element'])) : this['container']['append'](_0xb07ax4(_0xb07ax3))
                },
                pan: function(_0xb07ax3) {
                    var _0xb07ax4 = this['startPoint'],
                        _0xb07ax5 = this['contentProvider']['zoomScale'],
                        _0xb07ax6 = this['left'] + (_0xb07ax3['raw']['x'] - _0xb07ax4['raw']['x']),
                        _0xb07ax7 = this['top'] + (_0xb07ax3['raw']['y'] - _0xb07ax4['raw']['y']);
                    this['left'] = Math['round'](_0xb07ax18(_0xb07ax6, -this['shiftWidth'], this['shiftWidth'])), this['top'] = Math['round'](_0xb07ax18(_0xb07ax7, -this['shiftHeight'], this['shiftHeight'])), 1 == _0xb07ax5 && (this['left'] = 0, this['top'] = 0), this['startPoint'] = _0xb07ax3, this['stage']['css']({
                        transform: 'translate3d(' + this['left'] + 'px,' + this['top'] + 'px,0)'
                    })
                },
                getPageByNumber: function(_0xb07ax3) {
                    for (var _0xb07ax4, _0xb07ax5 = _0xb07ax23(this) ? _0xb07ax24(this) ? _0xb07ax3 + 1 : _0xb07ax3 : Math['floor']((_0xb07ax3 - 1) / 2), _0xb07ax6 = 0; _0xb07ax6 < this['pages']['length']; _0xb07ax6++) {
                        _0xb07ax5 == parseInt(this['pages'][_0xb07ax6]['name'], 10) && (_0xb07ax4 = this['pages'][_0xb07ax6])
                    };
                    return _0xb07ax4
                },
                getPageSide: function(_0xb07ax4) {
                    var _0xb07ax5 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                        _0xb07ax6 = this['getPageByNumber'](_0xb07ax4);
                    if (null != _0xb07ax6) {
                        return _0xb07ax23(this) ? _0xb07ax5 ? _0xb07ax6['front'] : _0xb07ax6['back'] : _0xb07ax4 % 2 == 0 ? _0xb07ax5 ? _0xb07ax6['back'] : _0xb07ax6['front'] : _0xb07ax5 ? _0xb07ax6['front'] : _0xb07ax6['back']
                    }
                },
                getContentLayer: function(_0xb07ax3) {
                    var _0xb07ax4 = this['getPageSide'](_0xb07ax3);
                    return null == _0xb07ax4 ? null : _0xb07ax4['contentLayer']
                }
            }, _0xb07ax7['prototype']['init'] = function(_0xb07ax3) {
                var _0xb07ax5 = this;
                _0xb07ax5['stage'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: 'ppdff-flipbook-stage'
                }), _0xb07ax5['wrapper'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: 'ppdff-flipbook-wrapper'
                }), _0xb07ax5['shadow'] = _0xb07ax4(_0xb07ax11['div'], {
                    class: 'ppdff-flipbook-shadow'
                }), _0xb07ax5['container']['append'](_0xb07ax5['stage']), _0xb07ax5['stage']['append'](_0xb07ax5['wrapper']), _0xb07ax5['wrapper']['append'](_0xb07ax5['shadow']), _0xb07ax5['createStack'](_0xb07ax3)
            }, _0xb07ax7['prototype']['createStack'] = function(_0xb07ax3) {
                for (var _0xb07ax4 = 'red,green,blue,yellow,orange,black' ['split'](','), _0xb07ax5 = 0; _0xb07ax5 < this['stackCount']; _0xb07ax5++) {
                    _0xb07ax3['angles'] = [, this['stackCount'] - _0xb07ax5], _0xb07ax3['stiffness'] = (this['stackCount'] - _0xb07ax5) / 100;
                    var _0xb07ax6 = new _0xb07ax2f(_0xb07ax3);
                    _0xb07ax6['angles'][1] = 180, _0xb07ax6['index'] = _0xb07ax5, _0xb07ax6['parent'] = this, _0xb07ax6['textureReady'] = !1, _0xb07ax6['textureRequested'] = !1, this['wrapper']['append'](_0xb07ax6['element']), _0xb07ax6['isFlipping'] = !1, this['pages']['push'](_0xb07ax6), _0xb07ax6['color'] = _0xb07ax4[_0xb07ax5]
                };
                this['children'] = this['pages']
            }, _0xb07ax7['prototype']['isPageHard'] = function(_0xb07ax3) {
                return _0xb07axd['isHardPage'](this['hardConfig'], _0xb07ax3, this['pageCount'], _0xb07ax23(this))
            }, _0xb07ax7['prototype']['setDuration'] = function(_0xb07ax3) {
                this['duration'] = _0xb07ax3
            }, _0xb07ax7['prototype']['moveBy'] = function(_0xb07ax3) {
                var _0xb07ax4 = this['_activePage'] + _0xb07ax3;
                _0xb07ax4 = _0xb07ax18(_0xb07ax4, this['startPage'], this['endPage']), this['gotoPage'](_0xb07ax4)
            }, _0xb07ax7['prototype']['next'] = function(_0xb07ax4) {
                null == _0xb07ax4 && (_0xb07ax4 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? -this['pageMode'] : this['pageMode']), this['moveBy'](_0xb07ax4)
            }, _0xb07ax7['prototype']['prev'] = function(_0xb07ax4) {
                null == _0xb07ax4 && (_0xb07ax4 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'] ? this['pageMode'] : -this['pageMode']), this['moveBy'](_0xb07ax4)
            }, _0xb07ax7['prototype']['eventToPoint'] = function(_0xb07ax5) {
                _0xb07ax5 = _0xb07ax21(_0xb07ax5);
                var _0xb07ax6 = this['wrapper'],
                    _0xb07ax7 = this['pages'],
                    _0xb07ax8 = this['pageWidth'],
                    _0xb07ax9 = this['fullWidth'],
                    _0xb07axa = this['height'],
                    _0xb07axb = (_0xb07ax4(window), {
                        x: _0xb07ax5['clientX'],
                        y: _0xb07ax5['clientY']
                    }),
                    _0xb07axc = _0xb07axb['x'] - _0xb07ax6[0]['getBoundingClientRect']()['left'],
                    _0xb07axd = _0xb07axb['y'] - _0xb07ax6[0]['getBoundingClientRect']()['top'];
                _0xb07axb['x'] = _0xb07axb['x'] - this['container'][0]['getBoundingClientRect']()['left'], _0xb07axb['y'] = _0xb07axb['y'] - this['container'][0]['getBoundingClientRect']()['top'];
                var _0xb07axe, _0xb07ax10 = this['drag'] == _0xb07axf['none'] ? _0xb07axc < _0xb07ax8 ? _0xb07axc : _0xb07ax9 - _0xb07axc : this['drag'] == _0xb07axf['left'] ? _0xb07axc : _0xb07ax9 - _0xb07axc,
                    _0xb07ax11 = _0xb07axc < _0xb07ax8 ? _0xb07ax7[this['stackCount'] / 2 - 1] : _0xb07ax7[this['stackCount'] / 2],
                    _0xb07ax12 = _0xb07axc < this['foldSense'] ? _0xb07axf['left'] : _0xb07axc > _0xb07ax9 - this['foldSense'] ? _0xb07axf['right'] : _0xb07axf['none'],
                    _0xb07ax13 = _0xb07axc,
                    _0xb07ax14 = _0xb07axd,
                    _0xb07ax15 = _0xb07axa,
                    _0xb07ax16 = _0xb07ax9,
                    _0xb07ax17 = this['foldSense'],
                    _0xb07ax18 = _0xb07ax3['CORNERS'];
                return _0xb07axe = _0xb07ax13 >= 0 && _0xb07ax13 < _0xb07ax17 ? _0xb07ax14 >= 0 && _0xb07ax14 <= _0xb07ax17 ? _0xb07ax18['TL'] : _0xb07ax14 >= _0xb07ax15 - _0xb07ax17 && _0xb07ax14 <= _0xb07ax15 ? _0xb07ax18['BL'] : _0xb07ax14 > _0xb07ax17 && _0xb07ax14 < _0xb07ax15 - _0xb07ax17 ? _0xb07ax18['L'] : _0xb07ax18['NONE'] : _0xb07ax13 >= _0xb07ax16 - _0xb07ax17 && _0xb07ax13 <= _0xb07ax16 ? _0xb07ax14 >= 0 && _0xb07ax14 <= _0xb07ax17 ? _0xb07ax18['TR'] : _0xb07ax14 >= _0xb07ax15 - _0xb07ax17 && _0xb07ax14 <= _0xb07ax15 ? _0xb07ax18['BR'] : _0xb07ax14 > _0xb07ax17 && _0xb07ax14 < _0xb07ax15 - _0xb07ax17 ? _0xb07ax18['R'] : _0xb07ax18['NONE'] : _0xb07ax18['NONE'], {
                    isInsidePage: _0xb07ax13 >= 0 && _0xb07ax13 <= _0xb07ax16 && _0xb07ax14 >= 0 && _0xb07ax14 <= _0xb07ax15,
                    isInside: _0xb07axe !== _0xb07ax18['NONE'] && _0xb07axe !== _0xb07ax18['L'] && _0xb07axe !== _0xb07ax18['R'],
                    x: _0xb07axc,
                    y: _0xb07axd,
                    fullWidth: _0xb07ax9,
                    rawDistance: _0xb07ax9 - _0xb07axc,
                    distance: _0xb07ax10,
                    page: _0xb07ax11,
                    drag: _0xb07ax12,
                    foldSense: this['foldSense'],
                    event: _0xb07ax5,
                    raw: _0xb07axb,
                    corner: _0xb07axe
                }
            }, _0xb07ax7['prototype']['gotoPage'] = function(_0xb07ax3) {
                _0xb07ax3 = parseInt(_0xb07ax3, 10), this['_activePage'] = _0xb07ax3, 1 == this['autoPlay'] && this['previewObject']['setAutoPlay'](this['autoPlay']), this['updatePage'](_0xb07ax3), this && this['thumblist'] && this['thumblist']['review'] && this['thumblist']['review']()
            }, _0xb07ax7['prototype']['refresh'] = function() {
                this['updatePage'](this._activePage), null != this['flipCallback'] && this['flipCallback']()
            }, _0xb07ax7['prototype']['updatePage'] = function(_0xb07ax5) {
                var _0xb07ax6 = this['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                    _0xb07ax7 = _0xb07ax23(this),
                    _0xb07ax8 = (_0xb07ax1f(_0xb07ax5), _0xb07ax7 ? 1 : 2);
                _0xb07ax5 = Math['floor'](_0xb07ax5 / _0xb07ax8), _0xb07ax6 && (_0xb07ax5 = this['pageCount'] / _0xb07ax8 - _0xb07ax5);
                var _0xb07axa = this['oldBaseNumber'] || 0,
                    _0xb07axb = this['pageCount'] / _0xb07ax8,
                    _0xb07axc = this['stackCount'],
                    _0xb07axd = Math['floor'](_0xb07axc / 2);
                _0xb07axa > _0xb07ax5 ? (this['children'][_0xb07axc - 1]['skipFlip'] = !0, this['children']['unshift'](this['children']['pop']())) : _0xb07axa < _0xb07ax5 && (this['children'][0]['skipFlip'] = !0, this['children']['push'](this['children']['shift']()));
                for (var _0xb07axe = 0; _0xb07axe < _0xb07axc; _0xb07axe++) {
                    var _0xb07ax10 = this['children'][_0xb07axe];
                    _0xb07axa !== _0xb07ax5 && null != _0xb07ax10['currentTween'] && _0xb07ax10['clearTween'](!0);
                    var _0xb07ax11, _0xb07ax12 = _0xb07ax10['side'],
                        _0xb07ax13 = _0xb07ax5 - _0xb07axd + _0xb07axe;
                    _0xb07ax6 && (_0xb07ax13 = _0xb07ax7 ? this['pageCount'] - _0xb07ax13 : Math['floor'](this['pageCount'] / 2) - _0xb07ax13 - 1);
                    var _0xb07ax14 = _0xb07ax10['name'];
                    _0xb07ax10['isHard'] = this['isPageHard'](_0xb07ax13), _0xb07ax10['isHard'] ? _0xb07ax10['element']['addClass']('pdff-hard-page') : (_0xb07ax10['element']['removeClass']('pdff-hard-page'), _0xb07ax10['front']['css']({
                        display: 'block'
                    }), _0xb07ax10['back']['css']({
                        display: 'block'
                    })), 0 == _0xb07ax13 || _0xb07ax13 == _0xb07axb ? _0xb07ax10['element']['addClass']('pdff-cover-page') : _0xb07ax10['element']['removeClass']('pdff-cover-page'), _0xb07ax4(_0xb07ax10['element'])['attr']('pageNumber') != _0xb07ax13 && (_0xb07ax10['front']['contentLayer']['empty'](), _0xb07ax10['back']['contentLayer']['empty']()), _0xb07ax4(_0xb07ax10['element'])['attr']('pageNumber', _0xb07ax13), _0xb07ax10['isEdge'] = !1, 0 == _0xb07axe || _0xb07axe == _0xb07axc - 1 || (_0xb07ax10['isEdge'] = !1), _0xb07ax11 = _0xb07axe < _0xb07axd ? _0xb07axf['left'] : _0xb07axf['right'], 0 == _0xb07ax10['isFlipping'] && (_0xb07ax11 !== _0xb07ax12 && 0 == _0xb07ax10['skipFlip'] ? (this['animatePage'](_0xb07ax10), null != this['preFlipCallback'] && this['preFlipCallback']()) : (_0xb07ax10['skipFlip'] = !1, _0xb07ax10['element']['removeClass']('pdff-flipping pdff-quick-turn pdff-folding pdff-left-side pdff-right-side'), _0xb07ax10['element']['addClass'](_0xb07axe < _0xb07axd ? 'pdff-left-side' : 'pdff-right-side'), _0xb07ax10['side'] = _0xb07ax11)), _0xb07ax10['visible'] = _0xb07ax7 ? _0xb07ax6 ? _0xb07axe < _0xb07axd || _0xb07ax10['isFlipping'] : _0xb07axe >= _0xb07axd || _0xb07ax10['isFlipping'] : _0xb07ax13 >= 0 && _0xb07ax13 < _0xb07axb || _0xb07ax7 && _0xb07ax13 == _0xb07axb, null != this['requestPage'] && 1 == _0xb07ax10['visible'] && (_0xb07ax10['name'] = _0xb07ax13.toString(), _0xb07ax10['name'] != _0xb07ax14 && (_0xb07ax10['backTextureLoaded'] = !1, _0xb07ax10['frontTextureLoaded'] = !1, _0xb07ax10['backPageStamp'] = '-1', _0xb07ax10['frontPageStamp'] = '-1', _0xb07ax10['thumbLoaded'] = !1, _0xb07ax10['front']['contentLayer']['html'](''), _0xb07ax10['back']['contentLayer']['html'](''), _0xb07ax10['frontImage'](_0xb07ax9['textureLoadFallback']), _0xb07ax10['backImage'](_0xb07ax9['textureLoadFallback']), this['requestPage']())), _0xb07ax10['oldDepth'] = _0xb07ax10['depth'], _0xb07ax10['updateCSS']({
                        display: 1 == _0xb07ax10['visible'] ? 'block' : 'none',
                        zIndex: 6 + (_0xb07axe < _0xb07axd ? _0xb07axe - _0xb07axd : _0xb07axd - _0xb07axe),
                        transform: ''
                    }), null == _0xb07ax10['pendingPoint'] && 0 == _0xb07ax10['isFlipping'] && _0xb07ax10['resetCSS']()
                };
                0 == TWEEN['getAll']()['length'] && clearInterval(this['animate']), _0xb07ax4('.quick-hint')['html'](_0xb07ax5), this['oldBaseNumber'] = _0xb07ax5, this['updatePageCallback'] && this['updatePageCallback']()
            }, _0xb07ax7['prototype']['animatePage'] = function(_0xb07ax3) {
                _0xb07ax3['element']['addClass']('pdff-flipping'), _0xb07ax3['isFlipping'] = !0, null != this['animate'] && clearInterval(this['animate']), this['animate'] = setInterval(this['animateF'], 30), _0xb07ax3['tween'](_0xb07ax3['pendingPoint'])
            }, _0xb07ax7
        }(),
        _0xb07ax31 = function(_0xb07ax5) {
            function _0xb07ax6(_0xb07ax6, _0xb07ax7, _0xb07ax8) {
                _0xb07ax5['call'](this, _0xb07ax8);
                var _0xb07ax9 = this;
                _0xb07ax9['type'] = 'FlipBook', _0xb07ax9['container'] = _0xb07ax6, _0xb07ax9['options'] = _0xb07ax8, _0xb07ax9['options']['source'] = _0xb07ax7, _0xb07ax9['contentSource'] = _0xb07ax7, null != _0xb07ax8['height'] && _0xb07ax8['height'].toString()['indexOf']('%') < 0 ? _0xb07ax9['container']['height'](Math['min'](_0xb07ax8['height'], _0xb07ax4(window)['height']())) : _0xb07ax9['container']['height'](_0xb07ax8['height']), _0xb07ax9['options']['isLightBox'] && window['dfLightBox']['closeButton']['addClass'](_0xb07ax9['options']['icons']['close']), _0xb07ax9['options']['pageSize'] == _0xb07ax3['PAGE_SIZE']['DOUBLEINTERNAL'] && ((Array === _0xb07ax9['contentSource']['constructor'] || Array['isArray'](_0xb07ax9['contentSource']) || _0xb07ax9['contentSource'] instanceof Array) && (_0xb07ax9['options']['singlePageMode'] = _0xb07ax3['SINGLE_PAGE_MODE']['ZOOM']), _0xb07ax9['container']['addClass']('pdff-double-internal')), _0xb07ax9['options']['isLightBox'] || null == _0xb07ax9['container']['attr']('id') || (_0xb07ax9['options']['id'] = _0xb07ax9['container']['attr']('id')), !0 !== _0xb07ax9['options']['parsed'] && null != _0xb07ax9['options']['links'] && _0xb07ax3['parseLinks'](_0xb07ax9['options']['links']);
                var _0xb07axa = _0xb07ax9['webgl'] = 1 == _0xb07ax8['webgl'] && 1 == _0xb07ax26;
                if (_0xb07ax6['addClass']('pdff-container pdff-loading pdff-init pdff-floating pdff-controls-' + _0xb07ax9['options']['controlsPosition']), 1 == _0xb07ax9['options']['transparent'] && _0xb07ax6['addClass']('pdff-transparent'), _0xb07ax9['options']['direction'] == _0xb07ax3['DIRECTION']['RTL'] && _0xb07ax6['addClass']('pdff-rtl'), _0xb07ax9['container']['info'] = _0xb07ax4(_0xb07ax11['div'], {
                        class: 'loading-info'
                    })['appendTo'](_0xb07ax9['container'])['html']('Loading...'), (-1 !== _0xb07axc['indexOf']('MSIE') || navigator['appVersion']['indexOf']('Trident/') > 0 || _0xb07ax27 && !_0xb07ax28) && (_0xb07ax9['options']['webgl'] = !1), _0xb07axc['match'](/msie\s[5-9]/i)) {
                    return _0xb07ax9['container']['info']['html']('Your browser (Internet Explorer) is out of date to run pdfflip Flipbook Plugin. <br><a href=\'http://browsehappy.com/\'>Upgrade to a new one</a>')['addClass']('pdff-old-browser'), _0xb07ax6['removeClass']('pdff-loading'), _0xb07ax9
                };
                var _0xb07axb = null == _0xb07ax8['backgroundImage'] || '' == _0xb07ax8['backgroundImage'] ? '' : 'url(\'' + _0xb07ax8['backgroundImage'] + '\')';
                return _0xb07ax9['container']['css']({
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: _0xb07ax8['backgroundColor'],
                    backgroundImage: _0xb07axb
                }), _0xb07ax9['init'](_0xb07axa, _0xb07ax7), null != _0xb07ax9['options']['onCreate'] && _0xb07ax9['options']['onCreate'](_0xb07ax9), _0xb07ax9
            }
            return _0xb07ax29(_0xb07ax6, _0xb07ax5), _0xb07ax6['prototype']['init'] = function(_0xb07ax5) {
                var _0xb07ax6, _0xb07ax7, _0xb07ax8 = this,
                    _0xb07axa = _0xb07ax8['target'],
                    _0xb07axb = _0xb07ax8['options'];
                if (1 == _0xb07ax5) {
                    _0xb07ax6 = function() {
                        _0xb07ax8['container']['css']({
                            minHeight: 300,
                            minWidth: 300
                        }), _0xb07ax8['stage'] = new _0xb07ax2b(_0xb07ax1e(_0xb07ax8['options'], {
                            container: _0xb07ax8['container']
                        })), _0xb07ax8['stage']['previewObject'] = _0xb07ax8, _0xb07ax8['contentProvider'] = new _0xb07ax2e(_0xb07ax8['contentSource'], function(_0xb07ax6) {
                            var _0xb07ax7 = {
                                pageCount: _0xb07ax6['pageCount'],
                                stackCount: 6,
                                segments: 20,
                                width: _0xb07ax6['bookSize']['width'],
                                height: _0xb07ax6['bookSize']['height']
                            };
                            _0xb07ax8['checkOpenPage'](), _0xb07ax8['target'] = _0xb07axa = _0xb07ax8['stage']['target'] = new MOCKUP.Book(_0xb07ax1e(_0xb07ax8['options'], _0xb07ax7), _0xb07ax8['stage']), _0xb07ax8['extendtarget'](), _0xb07ax2a(_0xb07ax8['container'], _0xb07ax8), _0xb07axa['ui'] = _0xb07ax8['ui'], _0xb07axa['container'] = _0xb07ax8['container'], _0xb07ax6['webgl'] = _0xb07ax5, _0xb07ax6['setTarget'](_0xb07ax8['target']), _0xb07axa['getContentLayer'] = function(_0xb07ax4) {
                                var _0xb07ax5 = _0xb07axa['direction'] == _0xb07ax3['DIRECTION']['RTL'],
                                    _0xb07ax6 = _0xb07ax8['stage']['cssScene']['divLeft']['element'],
                                    _0xb07ax7 = _0xb07ax8['stage']['cssScene']['divRight']['element'];
                                _0xb07ax1f(_0xb07axa._activePage);
                                return _0xb07ax23(_0xb07axa) ? _0xb07ax5 ? _0xb07ax6 : _0xb07ax7 : _0xb07ax4 % 2 == 0 ? _0xb07ax5 ? _0xb07ax7 : _0xb07ax6 : _0xb07ax5 ? _0xb07ax6 : _0xb07ax7
                            }, _0xb07axa['stage'] = _0xb07ax8['stage'], _0xb07axa['flipCallback'] = function() {
                                if (_0xb07ax8['contentProvider']) {
                                    _0xb07ax8['contentProvider']['review']('flipCallback');
                                    var _0xb07ax5, _0xb07ax6, _0xb07ax7 = _0xb07ax1f(_0xb07axa._activePage),
                                        _0xb07ax9 = _0xb07axa['getPageByNumber'](_0xb07ax7),
                                        _0xb07axb = _0xb07axa['getPageByNumber'](_0xb07ax7 + 1),
                                        _0xb07axc = _0xb07axa['parent']['cssScene']['divLeft'],
                                        _0xb07axd = _0xb07axa['parent']['cssScene']['divRight'];
                                    _0xb07axa['pageMode'], _0xb07ax3['PAGE_MODE']['SINGLE'], _0xb07axa['direction'], _0xb07ax3['DIRECTION']['RTL'];
                                    null != _0xb07ax9 && null != _0xb07axc && (_0xb07ax5 = Math['abs'](_0xb07ax9['geometry']['boundingBox']['max']['x'] - _0xb07ax9['geometry']['boundingBox']['min']['x']), _0xb07ax6 = Math['abs'](_0xb07ax9['geometry']['boundingBox']['max']['z'] - _0xb07ax9['geometry']['boundingBox']['min']['z']), _0xb07axc['rotation']['y'] = 0.9 * -Math['atan2'](_0xb07ax6, _0xb07ax5), _0xb07axc['position']['z'] = 0.8 * _0xb07ax6, _0xb07axc['position']['x'] = _0xb07ax6 / 2.5, _0xb07ax4(_0xb07axc['element'])['css']({
                                        width: _0xb07ax5,
                                        left: -_0xb07ax5 / 2
                                    })), null != _0xb07axb && null != _0xb07axd && (_0xb07ax5 = Math['abs'](_0xb07axb['geometry']['boundingBox']['max']['x'] - _0xb07axb['geometry']['boundingBox']['min']['x']), _0xb07ax6 = Math['abs'](_0xb07axb['geometry']['boundingBox']['max']['z'] - _0xb07axb['geometry']['boundingBox']['min']['z']), _0xb07axd['rotation']['y'] = 0.9 * Math['atan2'](_0xb07ax6, _0xb07ax5), _0xb07axd['position']['z'] = 0.8 * _0xb07ax6, _0xb07axd['position']['x'] = -_0xb07ax6 / 2.5, _0xb07ax4(_0xb07axd['element'])['css']({
                                        width: _0xb07ax5,
                                        left: _0xb07ax5 / 2
                                    })), null != _0xb07ax8['options']['onFlip'] && _0xb07ax8['options']['onFlip'](_0xb07ax8)
                                }
                            }, _0xb07axa['resize'] = void(_0xb07ax8['resize']()), _0xb07axa['updatePageCallback'] = function() {
                                _0xb07ax8['ui']['update'](), _0xb07ax8['checkCenter'](), _0xb07ax8['stage']['renderRequestPending'] = !0
                            };
                            var _0xb07ax9 = _0xb07ax4(_0xb07ax8['stage']['cssScene']['divLeft']['element']),
                                _0xb07axb = _0xb07ax4(_0xb07ax8['stage']['cssScene']['divRight']['element']);
                            _0xb07axa['preFlipCallback'] = function() {
                                _0xb07ax9['empty'](), _0xb07axb['empty'](), null != _0xb07ax8['options']['beforeFlip'] && _0xb07ax8['options']['beforeFlip'](_0xb07ax8), _0xb07ax8['playSound']()
                            }, _0xb07ax4(window)['trigger']('resize'), _0xb07ax9['css']({
                                width: _0xb07ax6['bookSize']['width'],
                                height: _0xb07ax6['bookSize']['height'],
                                left: -_0xb07ax6['bookSize']['width'] / 2
                            }), _0xb07axb['css']({
                                width: _0xb07ax6['bookSize']['width'],
                                height: _0xb07ax6['bookSize']['height'],
                                left: _0xb07ax6['bookSize']['width'] / 2
                            }), _0xb07axa['ease'] = TWEEN['Easing']['Cubic']['InOut'], _0xb07axa['contentProvider'] = _0xb07ax6, _0xb07axa['duration'] = _0xb07ax8['options']['duration'], _0xb07axa['gotoPage'](_0xb07axa._activePage), _0xb07axa['flipCallback'](), null != _0xb07ax8['options']['onReady'] && _0xb07ax8['options']['onReady'](_0xb07ax8)
                        }, _0xb07axb, _0xb07ax8)
                    }, _0xb07ax7 = function() {
                        MOCKUP['defaults']['anisotropy'] = 0, MOCKUP['defaults']['groundTexture'] = 'blank', THREE['skipPowerOfTwo'] = !0, _0xb07ax2c(), null != _0xb07ax6 && _0xb07ax6()
                    }, null == window['MOCKUP'] ? (_0xb07ax8['updateInfo']('Loading Interface ...'), 'function' == typeof define && define['amd'] ? (requirejs['config']({
                        paths: {
                            three: _0xb07ax9['threejsSrc']['replace']('.js', '')
                        },
                        shim: {
                            three: {
                                exports: 'THREE'
                            }
                        }
                    }), require(['three'], function(_0xb07ax4) {
                        return window['THREE'] = _0xb07ax4, _0xb07ax20(_0xb07ax9['utilsSrc'] + '?ver=' + _0xb07ax3['version'], function() {
                            _0xb07ax7()
                        }), _0xb07ax4
                    })) : _0xb07ax20(_0xb07ax9['threejsSrc'] + '?ver=' + _0xb07ax3['version'], function() {
                        _0xb07ax20(_0xb07ax9['utilsSrc'] + '?ver=' + _0xb07ax3['version'], function() {
                            _0xb07ax7()
                        })
                    })) : _0xb07ax7()
                } else {
                    _0xb07ax8['contentProvider'] = new _0xb07ax2e(_0xb07ax8['contentSource'], function(_0xb07ax3) {
                        var _0xb07ax6 = {
                            pageCount: _0xb07ax3['pageCount'],
                            contentSourceType: _0xb07ax3['contentSourceType']
                        };
                        _0xb07ax8['checkOpenPage'](), _0xb07ax8['target'] = _0xb07axa = new _0xb07ax30(_0xb07ax1e(_0xb07ax8['options'], _0xb07ax6), _0xb07ax8['container']), _0xb07ax8['target']['previewObject'] = _0xb07ax8, _0xb07ax8['extendtarget'](), _0xb07ax2a(_0xb07ax8['container'], _0xb07ax8), _0xb07ax3['webgl'] = _0xb07ax5, _0xb07ax3['setTarget'](_0xb07ax8['target']), _0xb07ax3['waitPeriod'] = 2, _0xb07axa['ease'] = TWEEN['Easing']['Quadratic']['InOut'], _0xb07axa['duration'] = _0xb07ax8['options']['duration'], _0xb07axa['container'] = _0xb07ax8['container'], _0xb07axa['updatePageCallback'] = function() {
                            _0xb07ax8['ui']['update'](), _0xb07ax8['checkCenter']()
                        }, _0xb07axa['resize'] = void(_0xb07ax8['resize']()), _0xb07ax4(window)['trigger']('resize'), _0xb07axa['flipCallback'] = function() {
                            _0xb07ax8['contentProvider'] && (_0xb07ax8['contentProvider']['review']('flipCallback'), null != _0xb07ax8['options']['onFlip'] && _0xb07ax8['options']['onFlip'](_0xb07ax8))
                        }, _0xb07axa['preFlipCallback'] = function() {
                            null != _0xb07ax8['options']['beforeFlip'] && _0xb07ax8['options']['beforeFlip'](_0xb07ax8), _0xb07ax8['playSound']()
                        }, _0xb07axa['gotoPage'](_0xb07axa._activePage), _0xb07axa['flipCallback'](), null != _0xb07ax8['options']['onReady'] && _0xb07ax8['options']['onReady'](_0xb07ax8)
                    }, _0xb07axb, _0xb07ax8)
                }
            }, _0xb07ax6['prototype']['extendtarget'] = function() {
                var _0xb07ax3 = this;
                _0xb07ax3['target']['previewObject'] = _0xb07ax3, _0xb07ax3['target']['reset'] = function() {
                    for (var _0xb07ax4 = 0; _0xb07ax4 < _0xb07ax3['target']['children']['length']; _0xb07ax4++) {
                        var _0xb07ax5 = _0xb07ax3['target']['children'][_0xb07ax4];
                        _0xb07ax5['skipFlip'] = !0, _0xb07ax5['name'] = '-2'
                    };
                    _0xb07ax3['contentProvider']['annotedPage'] = '-2', _0xb07ax3['target']['refresh']()
                }
            }, _0xb07ax6['prototype']['getURLHash'] = function() {
                if (null != this['options']['id']) {
                    var _0xb07ax3 = 'pdfflip-' + (null != this['options']['slug'] ? this['options']['slug'] : this['options']['id']) + '/';
                    null != this['target'] && null != this['target']['_activePage'] && (_0xb07ax3 += this['target']['_activePage'] + '/'), window['location']['hash'] = _0xb07ax3
                };
                return window['location']['href']
            }, _0xb07ax6['prototype']['checkOpenPage'] = function() {
                if (null != this['options']['id']) {
                    var _0xb07ax3 = _0xb07ax4('#' + this['options']['id']);
                    if (_0xb07ax3['length'] > 0 && null != _0xb07ax3['data']('page')) {
                        var _0xb07ax5 = parseInt(_0xb07ax3['data']('page'), 10);
                        isNaN(_0xb07ax5) || (this['options']['openPage'] = _0xb07ax5)
                    }
                }
            }, _0xb07ax6['prototype']['end'] = function() {
                this['target']['gotoPage'](this['target']['endPage'])
            }, _0xb07ax6['prototype']['gotoPage'] = function(_0xb07ax3) {
                this['target']['gotoPage'](_0xb07ax3), null != this['ui'] && this['ui']['update']()
            }, _0xb07ax6['prototype']['prev'] = function() {
                this['target']['prev']()
            }, _0xb07ax6['prototype']['next'] = function() {
                this['target']['next']()
            }, _0xb07ax6['prototype']['updateInfo'] = function(_0xb07ax3) {
                this['container'] && this['container']['info'] && this['container']['info']['html'] && this['container']['info']['html'](_0xb07ax3)
            }, _0xb07ax6
        }(_0xb07ax2d);
    _0xb07ax4['fn']['extend']({
        shelf: function() {},
        flipBook: function(_0xb07ax3, _0xb07ax5) {
            return new _0xb07ax31(_0xb07ax4(this), _0xb07ax3, (_0xb07ax6 = _0xb07ax5, _0xb07ax4['extend'](!0, {}, _0xb07ax9, _0xb07ax6)));
            var _0xb07ax6
        }
    })
}(pdfflip, jQuery),
function(_0xb07ax3) {
    if (_0xb07ax3['URL'] = _0xb07ax3['URL'] || _0xb07ax3['webkitURL'], _0xb07ax3['Blob'] && _0xb07ax3['URL']) {
        try {
            return void(new Blob)
        } catch (_0xb07ax3) {}
    };
    var _0xb07ax4 = _0xb07ax3['BlobBuilder'] || _0xb07ax3['WebKitBlobBuilder'] || _0xb07ax3['MozBlobBuilder'] || function(_0xb07ax3) {
        var _0xb07ax4 = function(_0xb07ax3) {
                return Object['prototype']['toString']['call'](_0xb07ax3)['match'](/^\[object\s(.*)\]$/)[1]
            },
            _0xb07ax5 = function() {
                this['data'] = []
            },
            _0xb07ax6 = function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                this['data'] = _0xb07ax3, this['size'] = _0xb07ax3['length'], this['type'] = _0xb07ax4, this['encoding'] = _0xb07ax5
            },
            _0xb07ax7 = _0xb07ax5['prototype'],
            _0xb07ax8 = _0xb07ax6['prototype'],
            _0xb07ax9 = _0xb07ax3['FileReaderSync'],
            _0xb07axa = function(_0xb07ax3) {
                this['code'] = this[this['name'] = _0xb07ax3]
            },
            _0xb07axb = 'NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR' ['split'](' '),
            _0xb07axc = _0xb07axb['length'],
            _0xb07axd = _0xb07ax3['URL'] || _0xb07ax3['webkitURL'] || _0xb07ax3,
            _0xb07axe = _0xb07axd['createObjectURL'],
            _0xb07axf = _0xb07axd['revokeObjectURL'],
            _0xb07ax10 = _0xb07axd,
            _0xb07ax11 = _0xb07ax3['btoa'],
            _0xb07ax12 = _0xb07ax3['atob'],
            _0xb07ax13 = _0xb07ax3['ArrayBuffer'],
            _0xb07ax14 = _0xb07ax3['Uint8Array'],
            _0xb07ax15 = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        for (_0xb07ax6['fake'] = _0xb07ax8['fake'] = !0; _0xb07axc--;) {
            _0xb07axa['prototype'][_0xb07axb[_0xb07axc]] = _0xb07axc + 1
        };
        return _0xb07axd['createObjectURL'] || (_0xb07ax10 = _0xb07ax3['URL'] = function(_0xb07ax3) {
            var _0xb07ax4, _0xb07ax5 = document['createElementNS']('http://www.w3.org/1999/xhtml', 'a');
            return _0xb07ax5['href'] = _0xb07ax3, 'origin' in _0xb07ax5 || ('data:' === _0xb07ax5['protocol']['toLowerCase']() ? _0xb07ax5['origin'] = null : (_0xb07ax4 = _0xb07ax3['match'](_0xb07ax15), _0xb07ax5['origin'] = _0xb07ax4 && _0xb07ax4[1])), _0xb07ax5
        }), _0xb07ax10['createObjectURL'] = function(_0xb07ax3) {
            var _0xb07ax4, _0xb07ax5 = _0xb07ax3['type'];
            return null === _0xb07ax5 && (_0xb07ax5 = 'application/octet-stream'), _0xb07ax3 instanceof _0xb07ax6 ? (_0xb07ax4 = 'data:' + _0xb07ax5, 'base64' === _0xb07ax3['encoding'] ? _0xb07ax4 + ';base64,' + _0xb07ax3['data'] : 'URI' === _0xb07ax3['encoding'] ? _0xb07ax4 + ',' + decodeURIComponent(_0xb07ax3['data']) : _0xb07ax11 ? _0xb07ax4 + ';base64,' + _0xb07ax11(_0xb07ax3['data']) : _0xb07ax4 + ',' + encodeURIComponent(_0xb07ax3['data'])) : _0xb07axe ? _0xb07axe['call'](_0xb07axd, _0xb07ax3) : void(0)
        }, _0xb07ax10['revokeObjectURL'] = function(_0xb07ax3) {
            'data:' !== _0xb07ax3['substring'](0, 5) && _0xb07axf && _0xb07axf['call'](_0xb07axd, _0xb07ax3)
        }, _0xb07ax7['append'] = function(_0xb07ax3) {
            var _0xb07ax5 = this['data'];
            if (_0xb07ax14 && (_0xb07ax3 instanceof _0xb07ax13 || _0xb07ax3 instanceof _0xb07ax14)) {
                for (var _0xb07ax7 = '', _0xb07ax8 = new _0xb07ax14(_0xb07ax3), _0xb07axb = 0, _0xb07axc = _0xb07ax8['length']; _0xb07axb < _0xb07axc; _0xb07axb++) {
                    _0xb07ax7 += String['fromCharCode'](_0xb07ax8[_0xb07axb])
                };
                _0xb07ax5['push'](_0xb07ax7)
            } else {
                if ('Blob' === _0xb07ax4(_0xb07ax3) || 'File' === _0xb07ax4(_0xb07ax3)) {
                    if (!_0xb07ax9) {
                        throw new _0xb07axa('NOT_READABLE_ERR')
                    };
                    var _0xb07axd = new _0xb07ax9;
                    _0xb07ax5['push'](_0xb07axd['readAsBinaryString'](_0xb07ax3))
                } else {
                    _0xb07ax3 instanceof _0xb07ax6 ? 'base64' === _0xb07ax3['encoding'] && _0xb07ax12 ? _0xb07ax5['push'](_0xb07ax12(_0xb07ax3['data'])) : 'URI' === _0xb07ax3['encoding'] ? _0xb07ax5['push'](decodeURIComponent(_0xb07ax3['data'])) : 'raw' === _0xb07ax3['encoding'] && _0xb07ax5['push'](_0xb07ax3['data']) : ('string' != typeof _0xb07ax3 && (_0xb07ax3 += ''), _0xb07ax5['push'](unescape(encodeURIComponent(_0xb07ax3))))
                }
            }
        }, _0xb07ax7['getBlob'] = function(_0xb07ax3) {
            return arguments['length'] || (_0xb07ax3 = null), new _0xb07ax6(this['data']['join'](''), _0xb07ax3, 'raw')
        }, _0xb07ax7['toString'] = function() {
            return '[object BlobBuilder]'
        }, _0xb07ax8['slice'] = function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
            var _0xb07ax7 = arguments['length'];
            return _0xb07ax7 < 3 && (_0xb07ax5 = null), new _0xb07ax6(this['data']['slice'](_0xb07ax3, _0xb07ax7 > 1 ? _0xb07ax4 : this['data']['length']), _0xb07ax5, this['encoding'])
        }, _0xb07ax8['toString'] = function() {
            return '[object Blob]'
        }, _0xb07ax8['close'] = function() {
            this['size'] = 0, delete this['data']
        }, _0xb07ax5
    }(_0xb07ax3);
    _0xb07ax3['Blob'] = function(_0xb07ax3, _0xb07ax5) {
        var _0xb07ax6 = _0xb07ax5 && _0xb07ax5['type'] || '',
            _0xb07ax7 = new _0xb07ax4;
        if (_0xb07ax3) {
            for (var _0xb07ax8 = 0, _0xb07ax9 = _0xb07ax3['length']; _0xb07ax8 < _0xb07ax9; _0xb07ax8++) {
                Uint8Array && _0xb07ax3[_0xb07ax8] instanceof Uint8Array ? _0xb07ax7['append'](_0xb07ax3[_0xb07ax8]['buffer']) : _0xb07ax7['append'](_0xb07ax3[_0xb07ax8])
            }
        };
        var _0xb07axa = _0xb07ax7['getBlob'](_0xb07ax6);
        return !_0xb07axa['slice'] && _0xb07axa['webkitSlice'] && (_0xb07axa['slice'] = _0xb07axa['webkitSlice']), _0xb07axa
    };
    var _0xb07ax5 = Object['getPrototypeOf'] || function(_0xb07ax3) {
        return _0xb07ax3['__proto__']
    };
    _0xb07ax3['Blob']['prototype'] = _0xb07ax5(new _0xb07ax3.Blob)
}(window),
function(_0xb07ax3) {
    var _0xb07ax4, _0xb07ax5 = _0xb07ax3['Uint8Array'],
        _0xb07ax6 = _0xb07ax3['HTMLCanvasElement'],
        _0xb07ax7 = _0xb07ax6 && _0xb07ax6['prototype'],
        _0xb07ax8 = /\s*;\s*base64\s*(?:;|$)/i,
        _0xb07ax9 = 'toDataURL';
    _0xb07ax5 && (_0xb07ax4 = new _0xb07ax5([62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, 0, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51])), _0xb07ax6 && !_0xb07ax7['toBlob'] && (_0xb07ax7['toBlob'] = function(_0xb07ax3, _0xb07ax6) {
        if (_0xb07ax6 || (_0xb07ax6 = 'image/png'), this['mozGetAsFile']) {
            _0xb07ax3(this['mozGetAsFile']('canvas', _0xb07ax6))
        } else {
            if (this['msToBlob'] && /^\s*image\/png\s*(?:$|;)/i ['test'](_0xb07ax6)) {
                _0xb07ax3(this['msToBlob']())
            } else {
                var _0xb07ax7, _0xb07axa = Array['prototype']['slice']['call'](arguments, 1),
                    _0xb07axb = this[_0xb07ax9]['apply'](this, _0xb07axa),
                    _0xb07axc = _0xb07axb['indexOf'](','),
                    _0xb07axd = _0xb07axb['substring'](_0xb07axc + 1),
                    _0xb07axe = _0xb07ax8['test'](_0xb07axb['substring'](0, _0xb07axc));
                Blob['fake'] ? ((_0xb07ax7 = new Blob)['encoding'] = _0xb07axe ? 'base64' : 'URI', _0xb07ax7['data'] = _0xb07axd, _0xb07ax7['size'] = _0xb07axd['length']) : _0xb07ax5 && (_0xb07ax7 = _0xb07axe ? new Blob([function(_0xb07ax3) {
                    for (var _0xb07ax6, _0xb07ax7, _0xb07ax8 = _0xb07ax3['length'], _0xb07ax9 = new _0xb07ax5(_0xb07ax8 / 4 * 3 | 0), _0xb07axa = 0, _0xb07axb = 0, _0xb07axc = [0, 0], _0xb07axd = 0, _0xb07axe = 0; _0xb07ax8--;) {
                        _0xb07ax7 = _0xb07ax3['charCodeAt'](_0xb07axa++), 255 !== (_0xb07ax6 = _0xb07ax4[_0xb07ax7 - 43]) && null != _0xb07ax6 && (_0xb07axc[1] = _0xb07axc[0], _0xb07axc[0] = _0xb07ax7, _0xb07axe = _0xb07axe << 6 | _0xb07ax6, 4 == ++_0xb07axd && (_0xb07ax9[_0xb07axb++] = _0xb07axe >>> 16, 61 !== _0xb07axc[1] && (_0xb07ax9[_0xb07axb++] = _0xb07axe >>> 8), 61 !== _0xb07axc[0] && (_0xb07ax9[_0xb07axb++] = _0xb07axe), _0xb07axd = 0))
                    };
                    return _0xb07ax9
                }(_0xb07axd)], {
                    type: _0xb07ax6
                }) : new Blob([decodeURIComponent(_0xb07axd)], {
                    type: _0xb07ax6
                })), _0xb07ax3(_0xb07ax7)
            }
        }
    }, _0xb07ax7['toDataURLHD'] ? _0xb07ax7['toBlobHD'] = function() {
        _0xb07ax9 = 'toDataURLHD';
        var _0xb07ax3 = this['toBlob']();
        return _0xb07ax9 = 'toDataURL', _0xb07ax3
    } : _0xb07ax7['toBlobHD'] = _0xb07ax7['toBlob'])
}(window),
function() {
    if ('performance' in window == !1 && (window['performance'] = {}), Date['now'] = Date['now'] || function() {
            return (new Date)['getTime']()
        }, 'now' in window['performance'] == !1) {
        var _0xb07ax3 = window['performance']['timing'] && window['performance']['timing']['navigationStart'] ? window['performance']['timing']['navigationStart'] : Date['now']();
        window['performance']['now'] = function() {
            return Date['now']() - _0xb07ax3
        }
    }
}(),
function() {
    var _0xb07ax3, _0xb07ax4, _0xb07ax5 = _0xb07ax5 || (_0xb07ax3 = [], {
        getAll: function() {
            return _0xb07ax3
        },
        removeAll: function() {
            _0xb07ax3 = []
        },
        add: function(_0xb07ax4) {
            _0xb07ax3['push'](_0xb07ax4)
        },
        remove: function(_0xb07ax4) {
            var _0xb07ax5 = _0xb07ax3['indexOf'](_0xb07ax4); - 1 !== _0xb07ax5 && _0xb07ax3['splice'](_0xb07ax5, 1)
        },
        update: function(_0xb07ax4) {
            if (0 === _0xb07ax3['length']) {
                return !1
            };
            var _0xb07ax5 = 0;
            for (_0xb07ax4 = null != _0xb07ax4 ? _0xb07ax4 : window['performance']['now'](); _0xb07ax5 < _0xb07ax3['length'];) {
                _0xb07ax3[_0xb07ax5]['update'](_0xb07ax4) ? _0xb07ax5++ : _0xb07ax3['splice'](_0xb07ax5, 1)
            };
            return !0
        }
    });
    _0xb07ax5['Tween'] = function(_0xb07ax3) {
        var _0xb07ax4 = _0xb07ax3,
            _0xb07ax6 = {},
            _0xb07ax7 = {},
            _0xb07ax8 = {},
            _0xb07ax9 = 1e3,
            _0xb07axa = 0,
            _0xb07axb = !1,
            _0xb07axc = !1,
            _0xb07axd = !1,
            _0xb07axe = 0,
            _0xb07axf = null,
            _0xb07ax10 = _0xb07ax5['Easing']['Linear']['None'],
            _0xb07ax11 = _0xb07ax5['Interpolation']['Linear'],
            _0xb07ax12 = [],
            _0xb07ax13 = null,
            _0xb07ax14 = !1,
            _0xb07ax15 = null,
            _0xb07ax16 = null,
            _0xb07ax17 = null;
        for (var _0xb07ax18 in _0xb07ax3) {
            _0xb07ax6[_0xb07ax18] = parseFloat(_0xb07ax3[_0xb07ax18], 10)
        };
        this['to'] = function(_0xb07ax3, _0xb07ax4) {
            return null != _0xb07ax4 && (_0xb07ax9 = _0xb07ax4), _0xb07ax7 = _0xb07ax3, this
        }, this['start'] = function(_0xb07ax3) {
            _0xb07ax5['add'](this), _0xb07axc = !0, _0xb07ax14 = !1, _0xb07axf = null != _0xb07ax3 ? _0xb07ax3 : window['performance']['now'](), _0xb07axf += _0xb07axe;
            for (var _0xb07ax9 in _0xb07ax7) {
                if (_0xb07ax7[_0xb07ax9] instanceof Array) {
                    if (0 === _0xb07ax7[_0xb07ax9]['length']) {
                        continue
                    };
                    _0xb07ax7[_0xb07ax9] = [_0xb07ax4[_0xb07ax9]]['concat'](_0xb07ax7[_0xb07ax9])
                };
                null !== _0xb07ax6[_0xb07ax9] && (_0xb07ax6[_0xb07ax9] = _0xb07ax4[_0xb07ax9], _0xb07ax6[_0xb07ax9] instanceof Array == !1 && (_0xb07ax6[_0xb07ax9] *= 1), _0xb07ax8[_0xb07ax9] = _0xb07ax6[_0xb07ax9] || 0)
            };
            return this
        }, this['stop'] = function() {
            return _0xb07axc ? (_0xb07ax5['remove'](this), _0xb07axc = !1, null !== _0xb07ax17 && _0xb07ax17['call'](_0xb07ax4), this['stopChainedTweens'](), this) : this
        }, this['stopChainedTweens'] = function() {
            for (var _0xb07ax3 = 0, _0xb07ax4 = _0xb07ax12['length']; _0xb07ax3 < _0xb07ax4; _0xb07ax3++) {
                _0xb07ax12[_0xb07ax3]['stop']()
            }
        }, this['complete'] = function() {
            return _0xb07axc ? (_0xb07ax5['remove'](this), _0xb07axc = !1, null !== _0xb07ax16 && _0xb07ax16['call'](_0xb07ax4), this['completeChainedTweens'](), this) : this
        }, this['completeChainedTweens'] = function() {
            for (var _0xb07ax3 = 0, _0xb07ax4 = _0xb07ax12['length']; _0xb07ax3 < _0xb07ax4; _0xb07ax3++) {
                _0xb07ax12[_0xb07ax3]['complete']()
            }
        }, this['delay'] = function(_0xb07ax3) {
            return _0xb07axe = _0xb07ax3, this
        }, this['repeat'] = function(_0xb07ax3) {
            return _0xb07axa = _0xb07ax3, this
        }, this['yoyo'] = function(_0xb07ax3) {
            return _0xb07axb = _0xb07ax3, this
        }, this['easing'] = function(_0xb07ax3) {
            return _0xb07ax10 = null == _0xb07ax3 ? _0xb07ax10 : _0xb07ax3, this
        }, this['interpolation'] = function(_0xb07ax3) {
            return _0xb07ax11 = _0xb07ax3, this
        }, this['chain'] = function() {
            return _0xb07ax12 = arguments, this
        }, this['onStart'] = function(_0xb07ax3) {
            return _0xb07ax13 = _0xb07ax3, this
        }, this['onUpdate'] = function(_0xb07ax3) {
            return _0xb07ax15 = _0xb07ax3, this
        }, this['onComplete'] = function(_0xb07ax3) {
            return _0xb07ax16 = _0xb07ax3, this
        }, this['onStop'] = function(_0xb07ax3) {
            return _0xb07ax17 = _0xb07ax3, this
        }, this['update'] = function(_0xb07ax3) {
            var _0xb07ax5, _0xb07axc, _0xb07ax17;
            if (_0xb07ax3 < _0xb07axf) {
                return !0
            };
            !1 === _0xb07ax14 && (null !== _0xb07ax13 && _0xb07ax13['call'](_0xb07ax4), _0xb07ax14 = !0), _0xb07ax17 = _0xb07ax10(_0xb07axc = (_0xb07axc = (_0xb07ax3 - _0xb07axf) / _0xb07ax9) > 1 ? 1 : _0xb07axc);
            for (_0xb07ax5 in _0xb07ax7) {
                if (null !== _0xb07ax6[_0xb07ax5]) {
                    var _0xb07ax18 = _0xb07ax6[_0xb07ax5] || 0,
                        _0xb07ax19 = _0xb07ax7[_0xb07ax5];
                    _0xb07ax19 instanceof Array ? _0xb07ax4[_0xb07ax5] = _0xb07ax11(_0xb07ax19, _0xb07ax17) : ('string' == typeof _0xb07ax19 && (_0xb07ax19 = _0xb07ax19['startsWith']('+') || _0xb07ax19['startsWith']('-') ? _0xb07ax18 + parseFloat(_0xb07ax19, 10) : parseFloat(_0xb07ax19, 10)), 'number' == typeof _0xb07ax19 && (_0xb07ax4[_0xb07ax5] = _0xb07ax18 + (_0xb07ax19 - _0xb07ax18) * _0xb07ax17))
                }
            };
            if (null !== _0xb07ax15 && _0xb07ax15['call'](_0xb07ax4, _0xb07ax17), 1 === _0xb07axc) {
                if (_0xb07axa > 0) {
                    isFinite(_0xb07axa) && _0xb07axa--;
                    for (_0xb07ax5 in _0xb07ax8) {
                        if ('string' == typeof _0xb07ax7[_0xb07ax5] && (_0xb07ax8[_0xb07ax5] = _0xb07ax8[_0xb07ax5] + parseFloat(_0xb07ax7[_0xb07ax5], 10)), _0xb07axb) {
                            var _0xb07ax1a = _0xb07ax8[_0xb07ax5];
                            _0xb07ax8[_0xb07ax5] = _0xb07ax7[_0xb07ax5], _0xb07ax7[_0xb07ax5] = _0xb07ax1a
                        };
                        _0xb07ax6[_0xb07ax5] = _0xb07ax8[_0xb07ax5]
                    };
                    return _0xb07axb && (_0xb07axd = !_0xb07axd), _0xb07axf = _0xb07ax3 + _0xb07axe, !0
                };
                null !== _0xb07ax16 && _0xb07ax16['call'](_0xb07ax4);
                for (var _0xb07ax1b = 0, _0xb07ax1c = _0xb07ax12['length']; _0xb07ax1b < _0xb07ax1c; _0xb07ax1b++) {
                    _0xb07ax12[_0xb07ax1b]['start'](_0xb07axf + _0xb07ax9)
                };
                return !1
            };
            return !0
        }
    }, _0xb07ax5['Easing'] = {
        Linear: {
            None: function(_0xb07ax3) {
                return _0xb07ax3
            }
        },
        Quadratic: {
            In: function(_0xb07ax3) {
                return _0xb07ax3 * _0xb07ax3
            },
            Out: function(_0xb07ax3) {
                return _0xb07ax3 * (2 - _0xb07ax3)
            },
            InOut: function(_0xb07ax3) {
                return (_0xb07ax3 *= 2) < 1 ? 0.5 * _0xb07ax3 * _0xb07ax3 : -0.5 * (--_0xb07ax3 * (_0xb07ax3 - 2) - 1)
            }
        },
        Quartic: {
            In: function(_0xb07ax3) {
                return _0xb07ax3 * _0xb07ax3 * _0xb07ax3 * _0xb07ax3
            },
            Out: function(_0xb07ax3) {
                return 1 - --_0xb07ax3 * _0xb07ax3 * _0xb07ax3 * _0xb07ax3
            },
            InOut: function(_0xb07ax3) {
                return (_0xb07ax3 *= 2) < 1 ? 0.5 * _0xb07ax3 * _0xb07ax3 * _0xb07ax3 * _0xb07ax3 : -0.5 * ((_0xb07ax3 -= 2) * _0xb07ax3 * _0xb07ax3 * _0xb07ax3 - 2)
            }
        },
        Sinusoidal: {
            In: function(_0xb07ax3) {
                return 1 - Math['cos'](_0xb07ax3 * Math['PI'] / 2)
            },
            Out: function(_0xb07ax3) {
                return Math['sin'](_0xb07ax3 * Math['PI'] / 2)
            },
            InOut: function(_0xb07ax3) {
                return 0.5 * (1 - Math['cos'](Math['PI'] * _0xb07ax3))
            }
        },
        Cubic: {
            In: function(_0xb07ax3) {
                return _0xb07ax3 * _0xb07ax3 * _0xb07ax3
            },
            Out: function(_0xb07ax3) {
                return --_0xb07ax3 * _0xb07ax3 * _0xb07ax3 + 1
            },
            InOut: function(_0xb07ax3) {
                return (_0xb07ax3 *= 2) < 1 ? 0.5 * _0xb07ax3 * _0xb07ax3 * _0xb07ax3 : 0.5 * ((_0xb07ax3 -= 2) * _0xb07ax3 * _0xb07ax3 + 2)
            }
        }
    }, _0xb07ax5['Interpolation'] = {
        Linear: function(_0xb07ax3, _0xb07ax4) {
            var _0xb07ax6 = _0xb07ax3['length'] - 1,
                _0xb07ax7 = _0xb07ax6 * _0xb07ax4,
                _0xb07ax8 = Math['floor'](_0xb07ax7),
                _0xb07ax9 = _0xb07ax5['Interpolation']['Utils']['Linear'];
            return _0xb07ax4 < 0 ? _0xb07ax9(_0xb07ax3[0], _0xb07ax3[1], _0xb07ax7) : _0xb07ax4 > 1 ? _0xb07ax9(_0xb07ax3[_0xb07ax6], _0xb07ax3[_0xb07ax6 - 1], _0xb07ax6 - _0xb07ax7) : _0xb07ax9(_0xb07ax3[_0xb07ax8], _0xb07ax3[_0xb07ax8 + 1 > _0xb07ax6 ? _0xb07ax6 : _0xb07ax8 + 1], _0xb07ax7 - _0xb07ax8)
        },
        Bezier: function(_0xb07ax3, _0xb07ax4) {
            for (var _0xb07ax6 = 0, _0xb07ax7 = _0xb07ax3['length'] - 1, _0xb07ax8 = Math['pow'], _0xb07ax9 = _0xb07ax5['Interpolation']['Utils']['Bernstein'], _0xb07axa = 0; _0xb07axa <= _0xb07ax7; _0xb07axa++) {
                _0xb07ax6 += _0xb07ax8(1 - _0xb07ax4, _0xb07ax7 - _0xb07axa) * _0xb07ax8(_0xb07ax4, _0xb07axa) * _0xb07ax3[_0xb07axa] * _0xb07ax9(_0xb07ax7, _0xb07axa)
            };
            return _0xb07ax6
        },
        Utils: {
            Linear: function(_0xb07ax3, _0xb07ax4, _0xb07ax5) {
                return (_0xb07ax4 - _0xb07ax3) * _0xb07ax5 + _0xb07ax3
            },
            Bernstein: function(_0xb07ax3, _0xb07ax4) {
                var _0xb07ax6 = _0xb07ax5['Interpolation']['Utils']['Factorial'];
                return _0xb07ax6(_0xb07ax3) / _0xb07ax6(_0xb07ax4) / _0xb07ax6(_0xb07ax3 - _0xb07ax4)
            },
            Factorial: (_0xb07ax4 = [1], function(_0xb07ax3) {
                var _0xb07ax5 = 1;
                if (_0xb07ax4[_0xb07ax3]) {
                    return _0xb07ax4[_0xb07ax3]
                };
                for (var _0xb07ax6 = _0xb07ax3; _0xb07ax6 > 1; _0xb07ax6--) {
                    _0xb07ax5 *= _0xb07ax6
                };
                return _0xb07ax4[_0xb07ax3] = _0xb07ax5, _0xb07ax5
            }),
            CatmullRom: function(_0xb07ax3, _0xb07ax4, _0xb07ax5, _0xb07ax6, _0xb07ax7) {
                var _0xb07ax8 = 0.5 * (_0xb07ax5 - _0xb07ax3),
                    _0xb07ax9 = 0.5 * (_0xb07ax6 - _0xb07ax4),
                    _0xb07axa = _0xb07ax7 * _0xb07ax7;
                return (2 * _0xb07ax4 - 2 * _0xb07ax5 + _0xb07ax8 + _0xb07ax9) * (_0xb07ax7 * _0xb07axa) + (-3 * _0xb07ax4 + 3 * _0xb07ax5 - 2 * _0xb07ax8 - _0xb07ax9) * _0xb07axa + _0xb07ax8 * _0xb07ax7 + _0xb07ax4
            }
        }
    }, window['TWEEN'] = _0xb07ax5
}(), pdfflip['createBlob'] = function(_0xb07ax3, _0xb07ax4) {
    if ('undefined' != typeof Blob) {
        return new Blob([_0xb07ax3], {
            type: _0xb07ax4
        })
    };
    var _0xb07ax5 = new MozBlobBuilder;
    return _0xb07ax5['append'](_0xb07ax3), _0xb07ax5['getBlob'](_0xb07ax4)
}, pdfflip['createObjectURL'] = function() {
    var _0xb07ax3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    return function(_0xb07ax4, _0xb07ax5) {
        if ('undefined' != typeof URL && URL['createObjectURL']) {
            var _0xb07ax6 = pdfflip['createBlob'](_0xb07ax4, _0xb07ax5);
            return URL['createObjectURL'](_0xb07ax6)
        };
        for (var _0xb07ax7 = 'data:' + _0xb07ax5 + ';base64,', _0xb07ax8 = 0, _0xb07ax9 = _0xb07ax4['length']; _0xb07ax8 < _0xb07ax9; _0xb07ax8 += 3) {
            var _0xb07axa = 255 & _0xb07ax4[_0xb07ax8],
                _0xb07axb = 255 & _0xb07ax4[_0xb07ax8 + 1],
                _0xb07axc = 255 & _0xb07ax4[_0xb07ax8 + 2];
            _0xb07ax7 += _0xb07ax3[_0xb07axa >> 2] + _0xb07ax3[(3 & _0xb07axa) << 4 | _0xb07axb >> 4] + _0xb07ax3[_0xb07ax8 + 1 < _0xb07ax9 ? (15 & _0xb07axb) << 2 | _0xb07axc >> 6 : 64] + _0xb07ax3[_0xb07ax8 + 2 < _0xb07ax9 ? 63 & _0xb07axc : 64]
        };
        return _0xb07ax7
    }
}();
var ThumbList = function() {
        function _0xb07ax3(_0xb07ax4) {
            var _0xb07ax5 = _0xb07ax4 && _0xb07ax4['w'] + 'px' || '100%',
                _0xb07ax6 = _0xb07ax4 && _0xb07ax4['h'] + 'px' || '100%',
                _0xb07ax7 = this['itemHeight'] = _0xb07ax4['itemHeight'];
            this['items'] = _0xb07ax4['items'], this['generatorFn'] = _0xb07ax4['generatorFn'], this['totalRows'] = _0xb07ax4['totalRows'] || _0xb07ax4['items'] && _0xb07ax4['items']['length'], this['addFn'] = _0xb07ax4['addFn'], this['scrollFn'] = _0xb07ax4['scrollFn'];
            var _0xb07ax8 = _0xb07ax3['createScroller'](_0xb07ax7 * this['totalRows']);
            this['container'] = _0xb07ax3['createContainer'](_0xb07ax5, _0xb07ax6), this['container']['appendChild'](_0xb07ax8), this['screenItemsLen'] = Math['ceil'](_0xb07ax4['h'] / _0xb07ax7), this['offsetItems'] = this['screenItemsLen'], this['cachedItemsLen'] = this['screenItemsLen'] + 2 * this['offsetItems'], this._renderChunk(this['container'], 0);
            var _0xb07ax9 = this;
            _0xb07ax9['lastRepaintY'] = 0;
            this['screenItemsLen'];

            function _0xb07axa(_0xb07ax3) {
                var _0xb07ax4 = _0xb07ax3['target']['scrollTop'];
                if (!_0xb07ax9['lastRepaintY'] || Math['abs'](_0xb07ax4 - _0xb07ax9['lastRepaintY']) >= _0xb07ax9['offsetItems'] * _0xb07ax9['itemHeight']) {
                    var _0xb07ax5 = parseInt(_0xb07ax4 / _0xb07ax7, 10) - _0xb07ax9['offsetItems'];
                    _0xb07ax9._renderChunk(_0xb07ax9['container'], _0xb07ax5 < 0 ? 0 : _0xb07ax5), _0xb07ax9['lastRepaintY'] = _0xb07ax4
                };
                _0xb07ax9['lastScrolled'] = Date['now'](), null != _0xb07ax9['scrollFn'] && _0xb07ax9['scrollFn'](), _0xb07ax3['preventDefault'] && _0xb07ax3['preventDefault']()
            }
            _0xb07ax9['dispose'] = function() {
                _0xb07ax9['container'] && _0xb07ax9['container']['parentNode'] && _0xb07ax9['container']['parentNode']['removeChild'](_0xb07ax9['container']), _0xb07ax9['container']['removeEventListener']('scroll', _0xb07axa)
            }, _0xb07ax9['container']['addEventListener']('scroll', _0xb07axa)
        }
        return _0xb07ax3['prototype']['reset'] = function(_0xb07ax3) {
            this['screenItemsLen'] = Math['ceil'](_0xb07ax3 / this['itemHeight']), this['cachedItemsLen'] = this['screenItemsLen'] + 2 * this['offsetItems'];
            var _0xb07ax4 = parseInt(this['lastRepaintY'] / this['itemHeight'], 10) - this['offsetItems'];
            this['needReset'] = !0, this._renderChunk(this['container'], Math['max'](_0xb07ax4, 0))
        }, _0xb07ax3['prototype']['createRow'] = function(_0xb07ax3) {
            var _0xb07ax4;
            return this['generatorFn'] && ((_0xb07ax4 = this['generatorFn'](_0xb07ax3))['classList']['add']('pdff-vrow'), _0xb07ax4['style']['position'] = 'absolute', _0xb07ax4['style']['top'] = _0xb07ax3 * this['itemHeight'] + 'px', _0xb07ax4['setAttribute']('index', _0xb07ax3)), _0xb07ax4
        }, _0xb07ax3['prototype']['_renderChunk'] = function(_0xb07ax3, _0xb07ax4) {
            var _0xb07ax5 = null == this['range'];
            this['range'] = this['range'] || {
                min: 0,
                max: this['cachedItemsLen']
            };
            var _0xb07ax6 = this['range'],
                _0xb07ax7 = _0xb07ax6['min'],
                _0xb07ax8 = _0xb07ax6['max'],
                _0xb07ax9 = !!_0xb07ax5 || _0xb07ax4 >= _0xb07ax7;
            if (_0xb07ax5 || _0xb07ax4 != _0xb07ax7 || 0 != this['needReset']) {
                var _0xb07axa, _0xb07axb = _0xb07ax5 ? _0xb07ax7 : _0xb07ax9 ? _0xb07ax8 : _0xb07ax4;
                _0xb07axb = _0xb07axb > this['totalRows'] ? this['totalRows'] : _0xb07axb < 0 ? 0 : _0xb07axb;
                var _0xb07axc = _0xb07ax4 + this['cachedItemsLen'];
                for (_0xb07axc = _0xb07axc > this['totalRows'] ? this['totalRows'] : _0xb07axc, _0xb07axa = _0xb07axb; _0xb07axa < _0xb07axc; _0xb07axa++) {
                    _0xb07ax9 ? _0xb07ax3['appendChild'](this['createRow'](_0xb07axa)) : _0xb07ax3['insertBefore'](this['createRow'](_0xb07axa), _0xb07ax3['childNodes'][1 + _0xb07axa - _0xb07axb]), null != this['addFn'] && this['addFn'](_0xb07axa)
                };
                Math['abs'](_0xb07ax4 - _0xb07ax7);
                if (this['needReset'] = !1, !_0xb07ax5 && _0xb07ax3['childNodes']['length'] > this['cachedItemsLen'] + 1) {
                    for (var _0xb07axd = _0xb07ax9 ? 1 : 1 + this['cachedItemsLen'], _0xb07axe = _0xb07axd + (_0xb07axc - _0xb07axb); _0xb07axe > _0xb07axd; _0xb07axe--) {
                        _0xb07ax3['childNodes'][_0xb07axd] && this['container']['removeChild'](_0xb07ax3['childNodes'][_0xb07axd])
                    }
                };
                this['range']['min'] = _0xb07ax4, this['range']['max'] = _0xb07axc
            }
        }, _0xb07ax3['createContainer'] = function(_0xb07ax3, _0xb07ax4) {
            var _0xb07ax5 = document['createElement']('div');
            return _0xb07ax5['style']['width'] = _0xb07ax3, _0xb07ax5['style']['height'] = _0xb07ax4, _0xb07ax5['style']['overflow'] = 'auto', _0xb07ax5['style']['position'] = 'relative', _0xb07ax5['style']['padding'] = 0, _0xb07ax5
        }, _0xb07ax3['createScroller'] = function(_0xb07ax3) {
            var _0xb07ax4 = document['createElement']('div');
            return _0xb07ax4['style']['opacity'] = 0, _0xb07ax4['style']['position'] = 'absolute', _0xb07ax4['style']['top'] = 0, _0xb07ax4['style']['left'] = 0, _0xb07ax4['style']['width'] = '1px', _0xb07ax4['style']['height'] = _0xb07ax3 + 'px', _0xb07ax4
        }, _0xb07ax3
    }(),
    BookMarkViewer = function() {
        function _0xb07ax3(_0xb07ax3) {
            this['outline'] = null, this['lastToggleIsShow'] = !0, this['container'] = _0xb07ax3['container'], this['linkService'] = _0xb07ax3['linkService'], this['outlineItemClass'] = _0xb07ax3['outlineItemClass'] || 'outlineItem', this['outlineToggleClass'] = _0xb07ax3['outlineToggleClass'] || 'outlineItemToggler', this['outlineToggleHiddenClass'] = _0xb07ax3['outlineToggleHiddenClass'] || 'outlineItemsHidden'
        }
        return _0xb07ax3['prototype'] = {
            dispose: function() {
                this['container'] && this['container']['parentNode'] && this['container']['parentNode']['removeChild'](this['container']), this['linkService'] = null
            },
            reset: function() {
                this['outline'] = null, this['lastToggleIsShow'] = !0;
                for (var _0xb07ax3 = this['container']; _0xb07ax3['firstChild'];) {
                    _0xb07ax3['removeChild'](_0xb07ax3['firstChild'])
                }
            },
            _dispatchEvent: function(_0xb07ax3) {
                var _0xb07ax4 = document['createEvent']('CustomEvent');
                _0xb07ax4['initCustomEvent']('outlineloaded', !0, !0, {
                    outlineCount: _0xb07ax3
                }), this['container']['dispatchEvent'](_0xb07ax4)
            },
            _bindLink: function(_0xb07ax3, _0xb07ax4) {
                var _0xb07ax5 = this['linkService'];
                if (1 == _0xb07ax4['custom']) {
                    _0xb07ax3['href'] = _0xb07ax5['getCustomDestinationHash'](_0xb07ax4['dest']), _0xb07ax3['onclick'] = function(_0xb07ax3) {
                        return _0xb07ax5['customNavigateTo'](_0xb07ax4['dest']), !1
                    }
                } else {
                    if (_0xb07ax4['url']) {
                        return void(PDFJS['addLinkAttributes'](_0xb07ax3, {
                            url: _0xb07ax4['url']
                        }))
                    };
                    _0xb07ax3['href'] = _0xb07ax5['getDestinationHash'](_0xb07ax4['dest']), _0xb07ax3['onclick'] = function(_0xb07ax3) {
                        return _0xb07ax5['navigateTo'](_0xb07ax4['dest']), !1
                    }
                }
            },
            _addToggleButton: function(_0xb07ax3) {
                var _0xb07ax4 = document['createElement']('div');
                _0xb07ax4['className'] = this['outlineToggleClass'] + ' ' + this['outlineToggleHiddenClass'], _0xb07ax4['onclick'] = function(_0xb07ax5) {
                    if (_0xb07ax5['stopPropagation'](), _0xb07ax4['classList']['toggle'](this['outlineToggleHiddenClass']), _0xb07ax5['shiftKey']) {
                        var _0xb07ax6 = !_0xb07ax4['classList']['contains'](this['outlineToggleHiddenClass']);
                        this._toggleOutlineItem(_0xb07ax3, _0xb07ax6)
                    }
                } ['bind'](this), _0xb07ax3['insertBefore'](_0xb07ax4, _0xb07ax3['firstChild'])
            },
            _toggleOutlineItem: function(_0xb07ax3, _0xb07ax4) {
                this['lastToggleIsShow'] = _0xb07ax4;
                for (var _0xb07ax5 = _0xb07ax3['querySelectorAll']('.' + this['outlineToggleClass']), _0xb07ax6 = 0, _0xb07ax7 = _0xb07ax5['length']; _0xb07ax6 < _0xb07ax7; ++_0xb07ax6) {
                    _0xb07ax5[_0xb07ax6]['classList'][_0xb07ax4 ? 'remove' : 'add'](this['outlineToggleHiddenClass'])
                }
            },
            toggleOutlineTree: function() {
                this['outline'] && this._toggleOutlineItem(this['container'], !this['lastToggleIsShow'])
            },
            render: function(_0xb07ax3) {
                var _0xb07ax4 = _0xb07ax3 && _0xb07ax3['outline'] || null,
                    _0xb07ax5 = 0;
                if (this['outline'] && this['reset'](), this['outline'] = _0xb07ax4, _0xb07ax4) {
                    for (var _0xb07ax6 = document['createDocumentFragment'](), _0xb07ax7 = [{
                            parent: _0xb07ax6,
                            items: this['outline']
                        }], _0xb07ax8 = !1; _0xb07ax7['length'] > 0;) {
                        for (var _0xb07ax9 = _0xb07ax7['shift'](), _0xb07axa = _0xb07ax9['custom'], _0xb07axb = 0, _0xb07axc = _0xb07ax9['items']['length']; _0xb07axb < _0xb07axc; _0xb07axb++) {
                            var _0xb07axd = _0xb07ax9['items'][_0xb07axb],
                                _0xb07axe = document['createElement']('div');
                            _0xb07axe['className'] = this['outlineItemClass'];
                            var _0xb07axf = document['createElement']('a');
                            if (null == _0xb07axd['custom'] && null != _0xb07axa && (_0xb07axd['custom'] = _0xb07axa), this._bindLink(_0xb07axf, _0xb07axd), _0xb07axf['textContent'] = _0xb07axd['title']['replace'](/\x00/g, ''), _0xb07axe['appendChild'](_0xb07axf), _0xb07axd['items'] && _0xb07axd['items']['length'] > 0) {
                                _0xb07ax8 = !0, this._addToggleButton(_0xb07axe);
                                var _0xb07ax10 = document['createElement']('div');
                                _0xb07ax10['className'] = this['outlineItemClass'] + 's', _0xb07axe['appendChild'](_0xb07ax10), _0xb07ax7['push']({
                                    parent: _0xb07ax10,
                                    custom: _0xb07axd['custom'],
                                    items: _0xb07axd['items']
                                })
                            };
                            _0xb07ax9['parent']['appendChild'](_0xb07axe), _0xb07ax5++
                        }
                    };
                    _0xb07ax8 && (null != this['container']['classList'] ? this['container']['classList']['add'](this['outlineItemClass'] + 's') : null != this['container']['className'] && (this['container']['className'] += ' picWindow')), this['container']['appendChild'](_0xb07ax6), this._dispatchEvent(_0xb07ax5)
                }
            }
        }, _0xb07ax3
    }(),
    DFLightBox = function(_0xb07ax3) {
        function _0xb07ax4(_0xb07ax4, _0xb07ax5) {
            this['duration'] = 300;
            var _0xb07ax6 = this;
            return _0xb07ax6['lightboxWrapper'] = _0xb07ax3('<div>')['addClass']('pdff-lightbox-wrapper'), _0xb07ax6['container'] = _0xb07ax3('<div>')['addClass']('pdff-container')['appendTo'](_0xb07ax6['lightboxWrapper']), _0xb07ax6['controls'] = _0xb07ax3('<div>')['addClass']('pdff-lightbox-controls')['appendTo'](_0xb07ax6['lightboxWrapper']), _0xb07ax6['closeButton'] = _0xb07ax3('<div>')['addClass']('pdff-lightbox-close pdff-ui-btn')['on']('click', function() {
                $('body')['css']('overflow', 'visible');
                _0xb07ax6['close'](_0xb07ax4)
            })['appendTo'](_0xb07ax6['controls']), _0xb07ax6['lightboxWrapper']['append'](_0xb07ax6['container']), _0xb07ax6
        }
        return _0xb07ax4['prototype']['show'] = function(_0xb07ax4) {
            return 0 == this['lightboxWrapper']['parent']()['length'] && _0xb07ax3('body')['append'](this['lightboxWrapper']), this['lightboxWrapper']['fadeIn'](this['duration'], _0xb07ax4), this
        }, _0xb07ax4['prototype']['close'] = function(_0xb07ax3) {
            return this['lightboxWrapper']['fadeOut'](this['duration']), setTimeout(_0xb07ax3, this['duration']), this
        }, _0xb07ax4
    }(jQuery);
pdfflip['Share'] = function(_0xb07ax3) {
    function _0xb07ax4(_0xb07ax4, _0xb07ax5) {
        var _0xb07ax6 = this,
            _0xb07ax7 = '<div>',
            _0xb07ax8 = 'pdff-share-button',
            _0xb07ax9 = 'width=500,height=400';
        _0xb07ax6['isOpen'] = !1, _0xb07ax6['shareUrl'] = '', _0xb07ax6['wrapper'] = _0xb07ax3('<div class="pdff-share-wrapper" style="display: none;">')['on']('click', function(_0xb07ax3) {
            _0xb07ax6['close']()
        }), _0xb07ax6['box'] = _0xb07ax3('<div class="pdff-share-box">')['on']('click', function(_0xb07ax3) {
            _0xb07ax3['preventDefault'](), _0xb07ax3['stopPropagation']()
        })['appendTo'](_0xb07ax6['wrapper'])['html']('<span class="pdff-share-title">' + _0xb07ax5['text']['share'] + '</span>'), _0xb07ax6['urlInput'] = _0xb07ax3('<textarea class="pdff-share-url">')['on']('click', function() {
            _0xb07ax3(this)['select']()
        }), _0xb07ax6['facebook'] = _0xb07ax3(_0xb07ax7, {
            class: _0xb07ax8 + ' pdff-share-facebook ' + _0xb07ax5['icons']['facebook']
        })['on']('click', function(_0xb07ax3) {
            window['open']('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_0xb07ax6['shareUrl']), 'Sharer', _0xb07ax9)
        }), _0xb07ax6['google'] = _0xb07ax3(_0xb07ax7, {
            class: _0xb07ax8 + ' pdff-share-google ' + _0xb07ax5['icons']['google']
        })['on']('click', function(_0xb07ax3) {
            window['open']('https://plus.google.com/share?url=' + encodeURIComponent(_0xb07ax6['shareUrl']), 'Sharer', _0xb07ax9)
        }), _0xb07ax6['twitter'] = _0xb07ax3(_0xb07ax7, {
            class: _0xb07ax8 + ' pdff-share-twitter ' + _0xb07ax5['icons']['twitter']
        })['on']('click', function(_0xb07ax3) {
            window['open']('http://twitter.com/share?url=' + encodeURIComponent(_0xb07ax6['shareUrl']), 'Sharer', _0xb07ax9)
        }), _0xb07ax6['mail'] = _0xb07ax3('<a>', {
            class: _0xb07ax8 + ' pdff-share-mail ' + _0xb07ax5['icons']['mail'],
            href: 'mailto:?subject=Check out this flipbook&body=Check out this site ' + encodeURIComponent(_0xb07ax6['shareUrl']),
            target: '_blank'
        })['on']('click', function(_0xb07ax4) {
            _0xb07ax3(this)['attr']('href', 'mailto:?subject=Check out this FlipBook&body=Check out this site ' + encodeURIComponent(_0xb07ax6['shareUrl'])), _0xb07ax4['stopPropagation']()
        }), _0xb07ax6['box']['append'](_0xb07ax6['urlInput'])['append'](_0xb07ax6['facebook'])['append'](_0xb07ax6['google'])['append'](_0xb07ax6['twitter'])['append'](_0xb07ax6['mail']), _0xb07ax3(_0xb07ax4)['append'](_0xb07ax6['wrapper'])
    }
    return _0xb07ax4['prototype']['show'] = function() {
        this['wrapper']['fadeIn'](300), this['urlInput']['val'](this['shareUrl']), this['urlInput']['trigger']('click'), this['isOpen'] = !0
    }, _0xb07ax4['prototype']['dispose'] = function() {
        var _0xb07ax3 = this;
        _0xb07ax3['box']['off'](), _0xb07ax3['google']['off'](), _0xb07ax3['twitter']['off'](), _0xb07ax3['facebook']['off'](), _0xb07ax3['mail']['off'](), _0xb07ax3['urlInput']['off'](), _0xb07ax3['wrapper']['off']()['remove']()
    }, _0xb07ax4['prototype']['close'] = function() {
        this['wrapper']['fadeOut'](300), this['isOpen'] = !1
    }, _0xb07ax4['prototype']['update'] = function(_0xb07ax3) {
        this['shareUrl'] = _0xb07ax3
    }, _0xb07ax4
}(jQuery), pdfflip['Popup'] = function(_0xb07ax3) {
    function _0xb07ax4(_0xb07ax4, _0xb07ax5) {
        var _0xb07ax6 = this;
        _0xb07ax6['isOpen'] = !1, _0xb07ax6['wrapper'] = _0xb07ax3('<div class="pdff-popup-wrapper" style="display: none;">')['on']('click', function(_0xb07ax3) {
            _0xb07ax6['close']()
        }), _0xb07ax6['box'] = _0xb07ax3('<div class="pdff-popup-box">')['on']('click', function(_0xb07ax3) {
            _0xb07ax3['preventDefault'](), _0xb07ax3['stopPropagation']()
        })['appendTo'](_0xb07ax6['wrapper']), _0xb07ax3(_0xb07ax4)['append'](_0xb07ax6['wrapper'])
    }
    return _0xb07ax4['prototype']['show'] = function() {
        this['wrapper']['fadeIn'](300), this['isOpen'] = !0
    }, _0xb07ax4['prototype']['dispose'] = function() {
        this['box']['off'](), this['wrapper']['off']()['remove']()
    }, _0xb07ax4['prototype']['close'] = function() {
        this['wrapper']['fadeOut'](300), this['isOpen'] = !1
    }, _0xb07ax4
}(jQuery);
var PDFLinkService = function() {
    function _0xb07ax3() {
        this['baseUrl'] = null, this['pdfDocument'] = null, this['pdfViewer'] = null, this['pdfHistory'] = null, this['_pagesRefCache'] = null
    }
    return _0xb07ax3['prototype'] = {
        dispose: function() {
            this['baseUrl'] = null, this['pdfDocument'] = null, this['pdfViewer'] = null, this['pdfHistory'] = null, this['_pagesRefCache'] = null
        },
        setDocument: function(_0xb07ax3, _0xb07ax4) {
            this['baseUrl'] = _0xb07ax4, this['pdfDocument'] = _0xb07ax3, this['_pagesRefCache'] = Object['create'](null)
        },
        setViewer: function(_0xb07ax3) {
            this['pdfViewer'] = _0xb07ax3
        },
        setHistory: function(_0xb07ax3) {
            this['pdfHistory'] = _0xb07ax3
        },
        get pagesCount() {
            return this['pdfDocument']['numPages']
        },
        get page() {
            return this['pdfViewer']['currentPageNumber']
        },
        set page(_0xb07ax3) {
            this['pdfViewer']['currentPageNumber'] = _0xb07ax3
        },
        navigateTo: function(_0xb07ax3) {
            var _0xb07ax4, _0xb07ax5 = '',
                _0xb07ax6 = this,
                _0xb07ax7 = function(_0xb07ax4) {
                    var _0xb07ax8 = _0xb07ax4 instanceof Object ? _0xb07ax6['_pagesRefCache'][_0xb07ax4['num'] + ' ' + _0xb07ax4['gen'] + ' R'] : _0xb07ax4 + 1;
                    _0xb07ax8 ? (_0xb07ax6['pdfViewer']['contentProvider']['options']['pageSize'] == pdfflip['PAGE_SIZE']['DOUBLEINTERNAL'] && _0xb07ax8 > 2 && (_0xb07ax8 = 2 * _0xb07ax8 - 1), _0xb07ax8 > _0xb07ax6['pdfViewer']['pageCount'] && (_0xb07ax8 = _0xb07ax6['pdfViewer']['pageCount']), _0xb07ax6['pdfViewer']['gotoPage'](_0xb07ax8), _0xb07ax6['pdfHistory'] && _0xb07ax6['pdfHistory']['push']({
                        dest: _0xb07ax3,
                        hash: _0xb07ax5,
                        page: _0xb07ax8
                    })) : _0xb07ax6['pdfDocument']['getPageIndex'](_0xb07ax4)['then'](function(_0xb07ax3) {
                        var _0xb07ax5 = _0xb07ax3 + 1,
                            _0xb07ax8 = _0xb07ax4['num'] + ' ' + _0xb07ax4['gen'] + ' R';
                        _0xb07ax6['_pagesRefCache'][_0xb07ax8] = _0xb07ax5, _0xb07ax7(_0xb07ax4)
                    })
                };
            'string' == typeof _0xb07ax3 ? (_0xb07ax5 = _0xb07ax3, _0xb07ax4 = this['pdfDocument']['getDestination'](_0xb07ax3)) : _0xb07ax4 = Promise['resolve'](_0xb07ax3), _0xb07ax4['then'](function(_0xb07ax4) {
                _0xb07ax3 = _0xb07ax4, _0xb07ax4 instanceof Array && _0xb07ax7(_0xb07ax4[0])
            })
        },
        customNavigateTo: function(_0xb07ax3) {
            if ('' != _0xb07ax3 && null != _0xb07ax3 && 'null' != _0xb07ax3) {
                var _0xb07ax4 = null;
                if (isNaN(Math['round'](_0xb07ax3))) {
                    if ('string' == typeof _0xb07ax3 && (_0xb07ax4 = parseInt(_0xb07ax3['replace']('#', ''), 10), isNaN(_0xb07ax4))) {
                        return void(window['open'](_0xb07ax3))
                    }
                } else {
                    _0xb07ax4 = _0xb07ax3
                };
                null != _0xb07ax4 && this['pdfViewer']['gotoPage'](_0xb07ax4)
            }
        },
        getDestinationHash: function(_0xb07ax3) {
            if ('string' == typeof _0xb07ax3) {
                return this['getAnchorUrl']('#' + escape(_0xb07ax3))
            };
            if (_0xb07ax3 instanceof Array) {
                var _0xb07ax4 = _0xb07ax3[0],
                    _0xb07ax5 = _0xb07ax4 instanceof Object ? this['_pagesRefCache'][_0xb07ax4['num'] + ' ' + _0xb07ax4['gen'] + ' R'] : _0xb07ax4 + 1;
                if (_0xb07ax5) {
                    var _0xb07ax6 = this['getAnchorUrl']('#page=' + _0xb07ax5),
                        _0xb07ax7 = _0xb07ax3[1];
                    if ('object' == typeof _0xb07ax7 && 'name' in _0xb07ax7 && 'XYZ' === _0xb07ax7['name']) {
                        var _0xb07ax8 = _0xb07ax3[4] || this['pdfViewer']['currentScaleValue'],
                            _0xb07ax9 = parseFloat(_0xb07ax8);
                        _0xb07ax9 && (_0xb07ax8 = 100 * _0xb07ax9), _0xb07ax6 += '&zoom=' + _0xb07ax8, (_0xb07ax3[2] || _0xb07ax3[3]) && (_0xb07ax6 += ',' + (_0xb07ax3[2] || 0) + ',' + (_0xb07ax3[3] || 0))
                    };
                    return _0xb07ax6
                }
            };
            return this['getAnchorUrl']('')
        },
        getCustomDestinationHash: function(_0xb07ax3) {
            return '#' + escape(_0xb07ax3)
        },
        getAnchorUrl: function(_0xb07ax3) {
            return (this['baseUrl'] || '') + _0xb07ax3
        },
        setHash: function(_0xb07ax3) {
            if (_0xb07ax3['indexOf']('=') >= 0) {
                var _0xb07ax4, _0xb07ax5, _0xb07ax6 = parseQueryString(_0xb07ax3);
                if ('nameddest' in _0xb07ax6) {
                    return this['pdfHistory'] && this['pdfHistory']['updateNextHashParam'](_0xb07ax6['nameddest']), void(this['navigateTo'](_0xb07ax6['nameddest']))
                };
                if ('page' in _0xb07ax6 && (_0xb07ax4 = 0 | _0xb07ax6['page'] || 1), 'zoom' in _0xb07ax6) {
                    var _0xb07ax7 = _0xb07ax6['zoom']['split'](','),
                        _0xb07ax8 = _0xb07ax7[0],
                        _0xb07ax9 = parseFloat(_0xb07ax8); - 1 === _0xb07ax8['indexOf']('Fit') ? _0xb07ax5 = [null, {
                        name: 'XYZ'
                    }, _0xb07ax7['length'] > 1 ? 0 | _0xb07ax7[1] : null, _0xb07ax7['length'] > 2 ? 0 | _0xb07ax7[2] : null, _0xb07ax9 ? _0xb07ax9 / 100 : _0xb07ax8] : 'Fit' === _0xb07ax8 || 'FitB' === _0xb07ax8 ? _0xb07ax5 = [null, {
                        name: _0xb07ax8
                    }] : 'FitH' === _0xb07ax8 || 'FitBH' === _0xb07ax8 || 'FitV' === _0xb07ax8 || 'FitBV' === _0xb07ax8 ? _0xb07ax5 = [null, {
                        name: _0xb07ax8
                    }, _0xb07ax7['length'] > 1 ? 0 | _0xb07ax7[1] : null] : 'FitR' === _0xb07ax8 ? 5 !== _0xb07ax7['length'] ? console['error']('PDFLinkService_setHash: Not enough parameters for \'FitR\'.') : _0xb07ax5 = [null, {
                        name: _0xb07ax8
                    }, 0 | _0xb07ax7[1], 0 | _0xb07ax7[2], 0 | _0xb07ax7[3], 0 | _0xb07ax7[4]] : console['error']('PDFLinkService_setHash: \'' + _0xb07ax8 + '\' is not a valid zoom value.')
                };
                if (_0xb07ax5 ? this['pdfViewer']['scrollPageIntoView'](_0xb07ax4 || this['page'], _0xb07ax5) : _0xb07ax4 && (this['page'] = _0xb07ax4), 'pagemode' in _0xb07ax6) {
                    var _0xb07axa = document['createEvent']('CustomEvent');
                    _0xb07axa['initCustomEvent']('pagemode', !0, !0, {
                        mode: _0xb07ax6['pagemode']
                    }), this['pdfViewer']['container']['dispatchEvent'](_0xb07axa)
                }
            } else {
                /^\d+$/ ['test'](_0xb07ax3) ? this['page'] = _0xb07ax3: (this['pdfHistory'] && this['pdfHistory']['updateNextHashParam'](unescape(_0xb07ax3)), this['navigateTo'](unescape(_0xb07ax3)))
            }
        },
        executeNamedAction: function(_0xb07ax3) {
            switch (_0xb07ax3) {
                case 'GoBack':
                    this['pdfHistory'] && this['pdfHistory']['back']();
                    break;
                case 'GoForward':
                    this['pdfHistory'] && this['pdfHistory']['forward']();
                    break;
                case 'NextPage':
                    this['page']++;
                    break;
                case 'PrevPage':
                    this['page']--;
                    break;
                case 'LastPage':
                    this['page'] = this['pagesCount'];
                    break;
                case 'FirstPage':
                    this['page'] = 1
            };
            var _0xb07ax4 = document['createEvent']('CustomEvent');
            _0xb07ax4['initCustomEvent']('namedaction', !0, !0, {
                action: _0xb07ax3
            }), this['pdfViewer']['container']['dispatchEvent'](_0xb07ax4)
        },
        cachePageRef: function(_0xb07ax3, _0xb07ax4) {
            var _0xb07ax5 = _0xb07ax4['num'] + ' ' + _0xb07ax4['gen'] + ' R';
            this['_pagesRefCache'][_0xb07ax5] = _0xb07ax3
        }
    }, _0xb07ax3
}();
pdfflip['TextLayerBuilder'] = function() {
        function _0xb07ax3(_0xb07ax3) {
            this['textLayerDiv'] = _0xb07ax3['textLayerDiv'], this['renderingDone'] = !1, this['divContentDone'] = !1, this['pageIdx'] = _0xb07ax3['pageIndex'], this['pageNumber'] = this['pageIdx'] + 1, this['matches'] = [], this['viewport'] = _0xb07ax3['viewport'], this['textDivs'] = [], this['findController'] = _0xb07ax3['findController'] || null, this['textLayerRenderTask'] = null, this['enhanceTextSelection'] = _0xb07ax3['enhanceTextSelection'], this._bindMouse()
        }
        return _0xb07ax3['prototype'] = {
            _finishRendering: function() {
                if (this['renderingDone'] = !0, !this['enhanceTextSelection']) {
                    var _0xb07ax3 = document['createElement']('div');
                    _0xb07ax3['className'] = 'endOfContent', this['textLayerDiv']['appendChild'](_0xb07ax3)
                }
            },
            render: function(_0xb07ax3) {
                if (this['divContentDone'] && !this['renderingDone']) {
                    this['textLayerRenderTask'] && (this['textLayerRenderTask']['cancel'](), this['textLayerRenderTask'] = null), this['textDivs'] = [];
                    var _0xb07ax4 = document['createDocumentFragment']();
                    this['textLayerRenderTask'] = PDFJS['renderTextLayer']({
                        textContent: this['textContent'],
                        container: _0xb07ax4,
                        viewport: this['viewport'],
                        textDivs: this['textDivs'],
                        timeout: _0xb07ax3,
                        enhanceTextSelection: this['enhanceTextSelection']
                    }), this['textLayerRenderTask']['promise']['then'](function() {
                        this['textLayerDiv']['appendChild'](_0xb07ax4), this._finishRendering(), this['updateMatches']()
                    } ['bind'](this), function(_0xb07ax3) {})
                }
            },
            setTextContent: function(_0xb07ax3) {
                this['textLayerRenderTask'] && (this['textLayerRenderTask']['cancel'](), this['textLayerRenderTask'] = null), this['textContent'] = _0xb07ax3, this['divContentDone'] = !0
            },
            convertMatches: function(_0xb07ax3, _0xb07ax4) {
                var _0xb07ax5 = 0,
                    _0xb07ax6 = 0,
                    _0xb07ax7 = this['textContent']['items'],
                    _0xb07ax8 = _0xb07ax7['length'] - 1,
                    _0xb07ax9 = null === this['findController'] ? 0 : this['findController']['state']['query']['length'],
                    _0xb07axa = [];
                if (!_0xb07ax3) {
                    return _0xb07axa
                };
                for (var _0xb07axb = 0, _0xb07axc = _0xb07ax3['length']; _0xb07axb < _0xb07axc; _0xb07axb++) {
                    for (var _0xb07axd = _0xb07ax3[_0xb07axb]; _0xb07ax5 !== _0xb07ax8 && _0xb07axd >= _0xb07ax6 + _0xb07ax7[_0xb07ax5]['str']['length'];) {
                        _0xb07ax6 += _0xb07ax7[_0xb07ax5]['str']['length'], _0xb07ax5++
                    };
                    _0xb07ax5 === _0xb07ax7['length'] && console['error']('Could not find a matching mapping');
                    var _0xb07axe = {
                        begin: {
                            divIdx: _0xb07ax5,
                            offset: _0xb07axd - _0xb07ax6
                        }
                    };
                    for (_0xb07axd += _0xb07ax4 ? _0xb07ax4[_0xb07axb] : _0xb07ax9; _0xb07ax5 !== _0xb07ax8 && _0xb07axd > _0xb07ax6 + _0xb07ax7[_0xb07ax5]['str']['length'];) {
                        _0xb07ax6 += _0xb07ax7[_0xb07ax5]['str']['length'], _0xb07ax5++
                    };
                    _0xb07axe['end'] = {
                        divIdx: _0xb07ax5,
                        offset: _0xb07axd - _0xb07ax6
                    }, _0xb07axa['push'](_0xb07axe)
                };
                return _0xb07axa
            },
            renderMatches: function(_0xb07ax3) {
                if (0 !== _0xb07ax3['length']) {
                    var _0xb07ax4 = this['textContent']['items'],
                        _0xb07ax5 = this['textDivs'],
                        _0xb07ax6 = null,
                        _0xb07ax7 = this['pageIdx'],
                        _0xb07ax8 = null !== this['findController'] && _0xb07ax7 === this['findController']['selected']['pageIdx'],
                        _0xb07ax9 = null === this['findController'] ? -1 : this['findController']['selected']['matchIdx'],
                        _0xb07axa = {
                            divIdx: -1,
                            offset: void(0)
                        },
                        _0xb07axb = _0xb07ax9,
                        _0xb07axc = _0xb07axb + 1;
                    if (null !== this['findController'] && this['findController']['state']['highlightAll']) {
                        _0xb07axb = 0, _0xb07axc = _0xb07ax3['length']
                    } else {
                        if (!_0xb07ax8) {
                            return
                        }
                    };
                    for (var _0xb07axd = _0xb07axb; _0xb07axd < _0xb07axc; _0xb07axd++) {
                        var _0xb07axe = _0xb07ax3[_0xb07axd],
                            _0xb07axf = _0xb07axe['begin'],
                            _0xb07ax10 = _0xb07axe['end'],
                            _0xb07ax11 = _0xb07ax8 && _0xb07axd === _0xb07ax9 ? ' selected' : '';
                        if (this['findController'] && this['findController']['updateMatchPosition'](_0xb07ax7, _0xb07axd, _0xb07ax5, _0xb07axf['divIdx']), _0xb07ax6 && _0xb07axf['divIdx'] === _0xb07ax6['divIdx'] ? _0xb07ax15(_0xb07ax6['divIdx'], _0xb07ax6['offset'], _0xb07axf['offset']) : (null !== _0xb07ax6 && _0xb07ax15(_0xb07ax6['divIdx'], _0xb07ax6['offset'], _0xb07axa['offset']), _0xb07ax14(_0xb07axf)), _0xb07axf['divIdx'] === _0xb07ax10['divIdx']) {
                            _0xb07ax15(_0xb07axf['divIdx'], _0xb07axf['offset'], _0xb07ax10['offset'], 'highlight' + _0xb07ax11)
                        } else {
                            _0xb07ax15(_0xb07axf['divIdx'], _0xb07axf['offset'], _0xb07axa['offset'], 'highlight begin' + _0xb07ax11);
                            for (var _0xb07ax12 = _0xb07axf['divIdx'] + 1, _0xb07ax13 = _0xb07ax10['divIdx']; _0xb07ax12 < _0xb07ax13; _0xb07ax12++) {
                                _0xb07ax5[_0xb07ax12]['className'] = 'highlight middle' + _0xb07ax11
                            };
                            _0xb07ax14(_0xb07ax10, 'highlight end' + _0xb07ax11)
                        };
                        _0xb07ax6 = _0xb07ax10
                    };
                    _0xb07ax6 && _0xb07ax15(_0xb07ax6['divIdx'], _0xb07ax6['offset'], _0xb07axa['offset'])
                };

                function _0xb07ax14(_0xb07ax3, _0xb07ax4) {
                    var _0xb07ax6 = _0xb07ax3['divIdx'];
                    _0xb07ax5[_0xb07ax6]['textContent'] = '', _0xb07ax15(_0xb07ax6, 0, _0xb07ax3['offset'], _0xb07ax4)
                }

                function _0xb07ax15(_0xb07ax3, _0xb07ax6, _0xb07ax7, _0xb07ax8) {
                    var _0xb07ax9 = _0xb07ax5[_0xb07ax3],
                        _0xb07axa = _0xb07ax4[_0xb07ax3]['str']['substring'](_0xb07ax6, _0xb07ax7),
                        _0xb07axb = document['createTextNode'](_0xb07axa);
                    if (_0xb07ax8) {
                        var _0xb07axc = document['createElement']('span');
                        return _0xb07axc['className'] = _0xb07ax8, _0xb07axc['appendChild'](_0xb07axb), void(_0xb07ax9['appendChild'](_0xb07axc))
                    };
                    _0xb07ax9['appendChild'](_0xb07axb)
                }
            },
            updateMatches: function() {
                if (this['renderingDone']) {
                    for (var _0xb07ax3, _0xb07ax4, _0xb07ax5 = this['matches'], _0xb07ax6 = this['textDivs'], _0xb07ax7 = this['textContent']['items'], _0xb07ax8 = -1, _0xb07ax9 = 0, _0xb07axa = _0xb07ax5['length']; _0xb07ax9 < _0xb07axa; _0xb07ax9++) {
                        for (var _0xb07axb = _0xb07ax5[_0xb07ax9], _0xb07axc = Math['max'](_0xb07ax8, _0xb07axb['begin']['divIdx']), _0xb07axd = _0xb07axb['end']['divIdx']; _0xb07axc <= _0xb07axd; _0xb07axc++) {
                            var _0xb07axe = _0xb07ax6[_0xb07axc];
                            _0xb07axe['textContent'] = _0xb07ax7[_0xb07axc]['str'], _0xb07axe['className'] = ''
                        };
                        _0xb07ax8 = _0xb07axb['end']['divIdx'] + 1
                    };
                    if (null !== this['findController'] && this['findController']['active']) {
                        null !== this['findController'] && (_0xb07ax3 = this['findController']['pageMatches'][this['pageIdx']] || null, _0xb07ax4 = this['findController']['pageMatchesLength'] && this['findController']['pageMatchesLength'][this['pageIdx']] || null), this['matches'] = this['convertMatches'](_0xb07ax3, _0xb07ax4), this['renderMatches'](this['matches'])
                    }
                }
            },
            _bindMouse: function() {
                var _0xb07ax3 = this['textLayerDiv'],
                    _0xb07ax4 = this;
                _0xb07ax3['addEventListener']('mousedown', function(_0xb07ax5) {
                    if (_0xb07ax4['enhanceTextSelection'] && _0xb07ax4['textLayerRenderTask']) {
                        _0xb07ax4['textLayerRenderTask']['expandTextDivs'](!0)
                    } else {
                        var _0xb07ax6 = _0xb07ax3['querySelector']('.endOfContent');
                        if (_0xb07ax6) {
                            var _0xb07ax7 = _0xb07ax5['target'] !== _0xb07ax3;
                            if (_0xb07ax7 = _0xb07ax7 && 'none' !== window['getComputedStyle'](_0xb07ax6)['getPropertyValue']('-moz-user-select')) {
                                var _0xb07ax8 = _0xb07ax3['getBoundingClientRect'](),
                                    _0xb07ax9 = Math['max'](0, (_0xb07ax5['pageY'] - _0xb07ax8['top']) / _0xb07ax8['height']);
                                _0xb07ax6['style']['top'] = (100 * _0xb07ax9)['toFixed'](2) + '%'
                            };
                            _0xb07ax6['classList']['add']('active')
                        }
                    }
                }), _0xb07ax3['addEventListener']('mouseup', function(_0xb07ax5) {
                    if (_0xb07ax4['enhanceTextSelection'] && _0xb07ax4['textLayerRenderTask']) {
                        _0xb07ax4['textLayerRenderTask']['expandTextDivs'](!1)
                    } else {
                        var _0xb07ax6 = _0xb07ax3['querySelector']('.endOfContent');
                        _0xb07ax6 && (_0xb07ax6['style']['top'] = '', _0xb07ax6['classList']['remove']('active'))
                    }
                })
            }
        }, _0xb07ax3
    }(), pdfflip['ConvertPageLinks'] = function() {
        for (var _0xb07ax3, _0xb07ax4 = arguments[0] / 100, _0xb07ax5 = arguments[1] / 100, _0xb07ax6 = function(_0xb07ax3, _0xb07ax6, _0xb07ax7, _0xb07ax8, _0xb07ax9) {
                return {
                    x: _0xb07ax3 / _0xb07ax4,
                    y: _0xb07ax6 / _0xb07ax5,
                    w: _0xb07ax7 / _0xb07ax4,
                    h: _0xb07ax8 / _0xb07ax5,
                    dest: _0xb07ax9
                }
            }, _0xb07ax7 = [], _0xb07ax8 = 2; _0xb07ax8 < arguments['length']; _0xb07ax8++) {
            _0xb07ax3 = arguments[_0xb07ax8], _0xb07ax7[_0xb07ax8 - 2] = _0xb07ax6['apply'](this, _0xb07ax3)
        };
        return _0xb07ax7
    }, pdfflip['parseLinks'] = function(_0xb07ax3) {
        var _0xb07ax4;
        if (null != _0xb07ax3 && _0xb07ax3['length'] > 0) {
            for (var _0xb07ax5 = 0; _0xb07ax5 < _0xb07ax3['length']; _0xb07ax5++) {
                null != (_0xb07ax4 = _0xb07ax3[_0xb07ax5]) && null != _0xb07ax4[0] && null == _0xb07ax4[0]['dest'] && (_0xb07ax4 = pdfflip['ConvertPageLinks']['apply'](this, _0xb07ax4), _0xb07ax3[_0xb07ax5] = _0xb07ax4)
            }
        };
        return _0xb07ax3
    },
    function(_0xb07ax3) {
        function _0xb07ax4(_0xb07ax3) {
            return 'true' == _0xb07ax3 || 1 == _0xb07ax3
        }

        function _0xb07ax5(_0xb07ax3) {
            null != _0xb07ax3['webgl'] && (_0xb07ax3['webgl'] = _0xb07ax4(_0xb07ax3['webgl'])), null != _0xb07ax3['downloadEnable'] && (_0xb07ax3['downloadEnable'] = _0xb07ax4(_0xb07ax3['downloadEnable'])), null != _0xb07ax3['scrollWheel'] && (_0xb07ax3['scrollWheel'] = _0xb07ax4(_0xb07ax3['scrollWheel'])), null != _0xb07ax3['autoEnableOutline'] && (_0xb07ax3['autoEnableOutline'] = _0xb07ax4(_0xb07ax3['autoEnableOutline'])), null != _0xb07ax3['autoEnableThumbnail'] && (_0xb07ax3['autoEnableThumbnail'] = _0xb07ax4(_0xb07ax3['autoEnableThumbnail'])), null != _0xb07ax3['transparent'] && (_0xb07ax3['transparent'] = _0xb07ax4(_0xb07ax3['transparent'])), null != _0xb07ax3['overwritePDFOutline'] && (_0xb07ax3['overwritePDFOutline'] = _0xb07ax4(_0xb07ax3['overwritePDFOutline'])), null != _0xb07ax3['enableSound'] && (_0xb07ax3['enableSound'] = _0xb07ax4(_0xb07ax3['enableSound'])), null != _0xb07ax3['forceFit'] && (_0xb07ax3['forceFit'] = _0xb07ax4(_0xb07ax3['forceFit'])), null != _0xb07ax3['enableAnnotation'] && (_0xb07ax3['enableAnnotation'] = _0xb07ax4(_0xb07ax3['enableAnnotation'])), null != _0xb07ax3['webglShadow'] && (_0xb07ax3['webglShadow'] = _0xb07ax4(_0xb07ax3['webglShadow'])), null != _0xb07ax3['autoPlay'] && (_0xb07ax3['autoPlay'] = _0xb07ax4(_0xb07ax3['autoPlay'])), null != _0xb07ax3['autoPlayStart'] && (_0xb07ax3['autoPlayStart'] = _0xb07ax4(_0xb07ax3['autoPlayStart'])), null != _0xb07ax3['paddingTop'] && (_0xb07ax3['paddingTop'] = parseInt(_0xb07ax3['paddingTop'], 10)), null != _0xb07ax3['paddingRight'] && (_0xb07ax3['paddingRight'] = parseInt(_0xb07ax3['paddingRight'], 10)), null != _0xb07ax3['paddingBottom'] && (_0xb07ax3['paddingBottom'] = parseInt(_0xb07ax3['paddingBottom'], 10)), null != _0xb07ax3['paddingLeft'] && (_0xb07ax3['paddingLeft'] = parseInt(_0xb07ax3['paddingLeft'], 10)), null != _0xb07ax3['zoomRatio'] && (_0xb07ax3['zoomRatio'] = parseFloat(_0xb07ax3['zoomRatio'], 10)), null != _0xb07ax3['stiffness'] && (_0xb07ax3['stiffness'] = parseFloat(_0xb07ax3['stiffness'], 10)), null != _0xb07ax3['autoPlayDuration'] && (_0xb07ax3['autoPlayDuration'] = parseInt(_0xb07ax3['autoPlayDuration'], 10)), 0 != _0xb07ax3['pageMode'] && '0' != _0xb07ax3['pageMode'] || (_0xb07ax3['pageMode'] = null), 0 != _0xb07ax3['singlePageMode'] && '0' != _0xb07ax3['singlePageMode'] || (_0xb07ax3['singlePageMode'] = null)
        }
        pdfflip['getOptions'] = function(_0xb07ax4) {
            var _0xb07ax6 = 'option_' + (_0xb07ax4 = _0xb07ax3(_0xb07ax4))['attr']('id'),
                _0xb07ax7 = _0xb07ax4['attr']('source') || _0xb07ax4['attr']('pdff-source');
            (_0xb07ax6 = null == _0xb07ax6 || '' == _0xb07ax6 || null == window[_0xb07ax6] ? {} : window[_0xb07ax6])['source'] = null == _0xb07ax7 || '' == _0xb07ax7 ? _0xb07ax6['source'] : _0xb07ax7;
            var _0xb07ax8 = {
                webgl: _0xb07ax4['attr']('webgl'),
                height: _0xb07ax4['attr']('height'),
                enableSound: _0xb07ax4['attr']('sound'),
                transparent: _0xb07ax4['attr']('transparent'),
                downloadEnable: _0xb07ax4['attr']('download'),
                duration: _0xb07ax4['attr']('duration'),
                hard: _0xb07ax4['attr']('hard'),
                pageMode: _0xb07ax4['attr']('pagemode'),
                direction: _0xb07ax4['attr']('direction'),
                backgroundColor: _0xb07ax4['attr']('backgroundcolor'),
                scrollWheel: _0xb07ax4['attr']('scrollwheel'),
                backgroundImage: _0xb07ax4['attr']('backgroundimage'),
                paddingTop: _0xb07ax4['attr']('paddingtop'),
                paddingRight: _0xb07ax4['attr']('paddingright'),
                paddingBottom: _0xb07ax4['attr']('paddingbottom'),
                paddingLeft: _0xb07ax4['attr']('paddingleft'),
                wpOptions: _0xb07ax4['attr']('wpoptions')
            };
            return function(_0xb07ax3) {
                if (1 != _0xb07ax3['parsed']) {
                    _0xb07ax3['parsed'] = !0;
                    var _0xb07ax4 = [];
                    if (_0xb07ax5(_0xb07ax3), 'undefined' != typeof pdfflipWPGlobal && 'true' == _0xb07ax3['wpOptions']) {
                        try {
                            for (var _0xb07ax6 in _0xb07ax3['links']) {
                                for (var _0xb07ax7 = _0xb07ax3['links'][_0xb07ax6], _0xb07ax8 = [100, 100], _0xb07ax9 = 0; _0xb07ax9 < _0xb07ax7['length']; _0xb07ax9++) {
                                    for (var _0xb07axa = _0xb07ax7[_0xb07ax9]['substr'](1)['slice'](0, -1)['split'](','), _0xb07axb = [], _0xb07axc = 0; _0xb07axc < 5; _0xb07axc++) {
                                        _0xb07axb[_0xb07axc] = _0xb07axa[_0xb07axc]
                                    };
                                    _0xb07ax8['push'](_0xb07axb)
                                };
                                _0xb07ax4[parseInt(_0xb07ax6, 10) + 1] = _0xb07ax8
                            }
                        } catch (_0xb07ax3) {
                            console['error'](_0xb07ax3['stack'])
                        };
                        _0xb07ax3['links'] = pdfflip['parseLinks'](_0xb07ax4)
                    } else {
                        _0xb07ax3['links'] = pdfflip['parseLinks'](_0xb07ax3['links'])
                    }
                }
            }(_0xb07ax6 = _0xb07ax3['extend'](!0, {}, _0xb07ax6, _0xb07ax8)), _0xb07ax6
        }, pdfflip['parseBooks'] = function() {
            _0xb07ax3('._PDFF_btt, ._pdff_thumb, ._PDFF_link, .PDFFlip')['each'](function() {
                var _0xb07ax4 = _0xb07ax3(this);
                if ('true' !== (_0xb07ax4['attr']('parsed') || _0xb07ax4['attr']('pdff-parsed'))) {
                    if (_0xb07ax4['attr']('pdff-parsed', 'true'), _0xb07ax4['hasClass']('PDFFlip')) {
                        var _0xb07ax5 = _0xb07ax4['attr']('id'),
                            _0xb07ax6 = _0xb07ax4['attr']('slug'),
                            _0xb07ax7 = pdfflip['getOptions'](_0xb07ax4);
                        _0xb07ax7['id'] = _0xb07ax5, null != _0xb07ax6 && (_0xb07ax7['slug'] = _0xb07ax6), _0xb07ax5 ? window[_0xb07ax5.toString()] = _0xb07ax3(_0xb07ax4)['flipBook'](_0xb07ax7['source'], _0xb07ax7) : _0xb07ax3(_0xb07ax4)['flipBook'](_0xb07ax7['source'], _0xb07ax7)
                    } else {
                        if (_0xb07ax4['hasClass']('_pdff_thumb')) {
                            var _0xb07ax8 = _0xb07ax3('<div class=\'PDFFlip-cover\'>'),
                                _0xb07ax9 = _0xb07ax4['html']()['trim']();
                            _0xb07ax4['html']('');
                            _0xb07ax3('<span class=\'PDFFlip-title\'>')['html'](_0xb07ax9)['appendTo'](_0xb07ax8);
                            var _0xb07axa = _0xb07ax4['attr']('thumb') || _0xb07ax4['attr']('pdff-thumb'),
                                _0xb07axb = _0xb07ax4['attr']('thumbtype') || pdfflip['defaults']['thumbElement'] || 'div',
                                _0xb07axc = _0xb07ax4['attr']('tags') || _0xb07ax4['attr']('pdff-tags');
                            if (_0xb07axc && (_0xb07axc = _0xb07axc['split'](','))['length'] > 0) {
                                for (var _0xb07axd = 0; _0xb07axd < _0xb07axc['length']; _0xb07axd++) {
                                    _0xb07ax4['append']('<span class=\'PDFFlip-tag\'>' + _0xb07axc[_0xb07axd] + '</span>')
                                }
                            };
                            null != _0xb07axa && '' != _0xb07axa.toString()['trim']() ? 'img' == _0xb07axb ? (_0xb07ax8['append']('<img src="' + _0xb07axa + '" alt="' + _0xb07ax9 + '"/>'), _0xb07ax4['attr']('thumb-type', 'img')) : _0xb07ax8['css']({
                                backgroundImage: 'url(' + _0xb07axa + ')'
                            }) : _0xb07ax8['addClass']('_pdff_thumb-not-found'), _0xb07ax4['append'](_0xb07ax8)
                        }
                    }
                }
            })
        }, _0xb07ax3(document)['ready'](function() {
            if ('undefined' == typeof pdfflipLocation && 0 != pdfflip['autoDetectLocation'] && _0xb07ax3('script')['each'](function() {
                    var _0xb07ax4 = _0xb07ax3(this)[0]['src'];
                    if ((_0xb07ax4['indexOf']('/pdfflip.js') > -1 || _0xb07ax4['indexOf']('/pdfflip.min.js') > -1) && (_0xb07ax4['indexOf']('https://') > -1 || _0xb07ax4['indexOf']('http://') > -1) && _0xb07ax4['indexOf']('js/pdfflip.') > -1) {
                        var _0xb07ax5 = _0xb07ax4['split']('/');
                        window['pdfflipLocation'] = _0xb07ax5['slice'](0, -2)['join']('/')
                    }
                }), 'undefined' != typeof pdfflipLocation && (pdfflipLocation['length'] > 2 && '/' !== pdfflipLocation['slice'](-1) && (window['pdfflipLocation'] += '/'), pdfflip['defaults']['utilsSrc'] = pdfflipLocation + 'js/libs/utils.min.js', pdfflip['defaults']['pdfjsSrc'] = pdfflipLocation + 'js/libs/pdf.min.js', pdfflip['defaults']['pdfjsCompatibilitySrc'] = pdfflipLocation + 'js/libs/compatibility.js', pdfflip['defaults']['threejsSrc'] = pdfflipLocation + 'js/libs/three.min.js', pdfflip['defaults']['pdfjsWorkerSrc'] = pdfflipLocation + 'js/libs/pdf.worker.min.js', pdfflip['defaults']['soundFile'] = pdfflipLocation + 'sound/turn.mp3', pdfflip['defaults']['imagesLocation'] = pdfflipLocation + 'images', pdfflip['defaults']['imageResourcesPath'] = pdfflipLocation + 'images/pdfjs/', pdfflip['defaults']['cMapUrl'] = pdfflipLocation + 'js/libs/cmaps/', 'undefined' != typeof pdfflipWPGlobal && (_0xb07ax5(pdfflipWPGlobal), _0xb07ax3['extend'](pdfflip['defaults'], pdfflipWPGlobal))), pdfflip['preParseHash'] = window['location']['hash'], pdfflip['parseBooks'](), _0xb07ax3('body')['on']('click', '._PDFF_btt, ._pdff_thumb, ._PDFF_link', function() {
                    $('body')['css']('overflow', 'hidden');
                    var _0xb07ax4 = _0xb07ax3(this);
                    window['dfLightBox'] || (window['dfLightBox'] = new DFLightBox(function() {
                        0 == window['location']['hash']['indexOf']('#pdfflip-') && (window['location']['hash'] = '#_'), window['dfActiveLightBoxBook']['dispose'](), window['dfActiveLightBoxBook'] = null
                    })), window['dfLightBox']['duration'] = 500, window['dfActiveLightBoxBook'] && window['dfActiveLightBoxBook']['dispose'] ? window['dfActiveLightBoxBook']['dispose']() : window['dfLightBox']['show'](function() {
                        var _0xb07ax5 = pdfflip['getOptions'](_0xb07ax4);
                        _0xb07ax5['transparent'] = !1, _0xb07ax5['id'] = _0xb07ax4['attr']('id');
                        var _0xb07ax6 = _0xb07ax4['attr']('slug');
                        null != _0xb07ax6 && (_0xb07ax5['slug'] = _0xb07ax6), _0xb07ax5['isLightBox'] = !0, window['dfActiveLightBoxBook'] = _0xb07ax3(window['dfLightBox']['container'])['flipBook'](_0xb07ax5['source'], _0xb07ax5)
                    })
                }), (pdfflip['utils']['isSafari'] || pdfflip['utils']['isIOS']) && _0xb07ax3('body')['addClass']('pdff-webkit'), pdfflip['preParseHash'] && pdfflip['preParseHash']['indexOf']('pdfflip-') >= 0) {
                var _0xb07ax4, _0xb07ax6 = pdfflip['preParseHash']['split']('pdfflip-')[1]['split']('/')[0],
                    _0xb07ax7 = pdfflip['preParseHash']['split']('pdfflip-')[1]['split']('/')[1];
                null != _0xb07ax7 && (_0xb07ax7 = _0xb07ax7['split']('/')[0]), 0 == (_0xb07ax4 = _0xb07ax3('[slug=' + _0xb07ax6 + ']'))['length'] && (_0xb07ax4 = _0xb07ax3('#' + _0xb07ax6)), _0xb07ax4['length'] > 0 && (null != _0xb07ax7 && _0xb07ax4['data']('page', _0xb07ax7), _0xb07ax4['is']('._PDFF_btt, ._pdff_thumb, ._PDFF_link') && _0xb07ax4['trigger']('click'))
            };
            _0xb07ax3('body')['on']('click', '.pdff-ui-sidemenu-close', function() {
                _0xb07ax3(this)['closest']('.pdff-container')['find']('.pdff-ui-outline.pdff-active , .pdff-ui-thumbnail.pdff-active')['trigger']('click')
            })
        })
    }(jQuery)