import { c as create_ssr_component, h as createEventDispatcher, o as onDestroy, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index3.js";
import { R as RangeSlider } from "../../../../chunks/RangeSlider.js";
import "devalue";
import "toastify-js";
function restrictPosition(position, imageSize, cropSize, zoom) {
  return {
    x: restrictPositionCoord(position.x, imageSize.width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, imageSize.height, cropSize.height, zoom)
  };
}
function restrictPositionCoord(position, imageSize, cropSize, zoom) {
  const maxPosition = imageSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}
function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
const Cropper_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-4q75l8{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;touch-action:none;cursor:move}.image.svelte-4q75l8{max-width:100%;max-height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;will-change:transform}.cropperArea.svelte-4q75l8{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);box-shadow:0 0 0 9999em;box-sizing:border-box;color:rgba(0, 0, 0, 0.5);border:1px solid rgba(255, 255, 255, 0.5);overflow:hidden}.grid.svelte-4q75l8:before{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:0;bottom:0;left:33.33%;right:33.33%;border-top:0;border-bottom:0}.grid.svelte-4q75l8:after{content:' ';box-sizing:border-box;border:1px solid rgba(255, 255, 255, 0.5);position:absolute;top:33.33%;bottom:33.33%;left:0;right:0;border-left:0;border-right:0}.round.svelte-4q75l8{border-radius:50%}",
  map: null
};
const Cropper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { crop = { x: 0, y: 0 } } = $$props;
  let { zoom = 1 } = $$props;
  let { aspect = 4 / 3 } = $$props;
  let { minZoom = 1 } = $$props;
  let { maxZoom = 3 } = $$props;
  let { cropSize = null } = $$props;
  let { cropShape = "rect" } = $$props;
  let { showGrid = true } = $$props;
  let { zoomSpeed = 1 } = $$props;
  let { crossOrigin = null } = $$props;
  let { restrictPosition: restrictPosition$1 = true } = $$props;
  let cropperSize = null;
  let imageSize = {
    width: 0,
    height: 0,
    naturalWidth: 0,
    naturalHeight: 0
  };
  let containerEl = null;
  let imgEl = null;
  let dragStartPosition = { x: 0, y: 0 };
  let dragStartCrop = { x: 0, y: 0 };
  let rafDragTimeout = null;
  let rafZoomTimeout = null;
  createEventDispatcher();
  onDestroy(() => {
    cleanEvents();
  });
  const cleanEvents = () => {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onDragStopped);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onDragStopped);
    }
  };
  const getMousePoint = (e) => ({
    x: Number(e.clientX),
    y: Number(e.clientY)
  });
  const getTouchPoint = (touch) => ({
    x: Number(touch.clientX),
    y: Number(touch.clientY)
  });
  const onMouseMove = (e) => onDrag(getMousePoint(e));
  const onTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      onPinchMove(e);
    } else if (e.touches.length === 1) {
      onDrag(getTouchPoint(e.touches[0]));
    }
  };
  const onDrag = ({ x, y }) => {
    if (rafDragTimeout)
      window.cancelAnimationFrame(rafDragTimeout);
    rafDragTimeout = window.requestAnimationFrame(() => {
      if (x === void 0 || y === void 0 || !cropperSize)
        return;
      const offsetX = x - dragStartPosition.x;
      const offsetY = y - dragStartPosition.y;
      const requestedPosition = {
        x: dragStartCrop.x + offsetX,
        y: dragStartCrop.y + offsetY
      };
      crop = restrictPosition$1 ? restrictPosition(requestedPosition, imageSize, cropperSize, zoom) : requestedPosition;
    });
  };
  const onDragStopped = () => {
    cleanEvents();
  };
  const onPinchMove = (e) => {
    const pointA = getTouchPoint(e.touches[0]);
    const pointB = getTouchPoint(e.touches[1]);
    const center = getCenter(pointA, pointB);
    onDrag(center);
    if (rafZoomTimeout)
      window.cancelAnimationFrame(rafZoomTimeout);
    rafZoomTimeout = window.requestAnimationFrame(() => {
      getDistanceBetweenPoints(pointA, pointB);
    });
  };
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.crop === void 0 && $$bindings.crop && crop !== void 0)
    $$bindings.crop(crop);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.aspect === void 0 && $$bindings.aspect && aspect !== void 0)
    $$bindings.aspect(aspect);
  if ($$props.minZoom === void 0 && $$bindings.minZoom && minZoom !== void 0)
    $$bindings.minZoom(minZoom);
  if ($$props.maxZoom === void 0 && $$bindings.maxZoom && maxZoom !== void 0)
    $$bindings.maxZoom(maxZoom);
  if ($$props.cropSize === void 0 && $$bindings.cropSize && cropSize !== void 0)
    $$bindings.cropSize(cropSize);
  if ($$props.cropShape === void 0 && $$bindings.cropShape && cropShape !== void 0)
    $$bindings.cropShape(cropShape);
  if ($$props.showGrid === void 0 && $$bindings.showGrid && showGrid !== void 0)
    $$bindings.showGrid(showGrid);
  if ($$props.zoomSpeed === void 0 && $$bindings.zoomSpeed && zoomSpeed !== void 0)
    $$bindings.zoomSpeed(zoomSpeed);
  if ($$props.crossOrigin === void 0 && $$bindings.crossOrigin && crossOrigin !== void 0)
    $$bindings.crossOrigin(crossOrigin);
  if ($$props.restrictPosition === void 0 && $$bindings.restrictPosition && restrictPosition$1 !== void 0)
    $$bindings.restrictPosition(restrictPosition$1);
  $$result.css.add(css);
  return `
<div class="${"container svelte-4q75l8"}" data-testid="${"container"}"${add_attribute("this", containerEl, 0)}><img class="${"image svelte-4q75l8"}"${add_attribute("src", image, 0)} alt="${""}" style="${"transform: translate(" + escape(crop.x, true) + "px, " + escape(crop.y, true) + "px) scale(" + escape(zoom, true) + ");"}"${add_attribute("crossorigin", crossOrigin, 0)}${add_attribute("this", imgEl, 0)}>
  ${``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let { data } = $$props;
  let crop = { x: 0, y: 0, width: 300, height: 300 };
  let cropSize = { width: 300, height: 300 };
  let zoom = 1;
  let pixels, submitButton;
  let rangeSlider = [1];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (rangeSlider) {
        zoom = rangeSlider[0];
      }
    }
    data.photoApproval.id;
    image = "https://d1ql1h7f6x0zr6.cloudfront.net/" + data.photoApproval.url;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-2o0478_START -->${$$result.title = `<title>Hesabım • Fotoğraf Onayı</title>`, ""}<!-- HEAD_svelte-2o0478_END -->`, ""}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Fotoğraf Onayı</div>
        <div class="${"flex flex-col gap-4 p-6 text-center"}"><div class="${"w-[300px] h-[300px] bg-black relative mx-auto"}">${validate_component(Cropper, "Cropper").$$render(
      $$result,
      { image, crop, zoom, cropSize },
      {
        crop: ($$value) => {
          crop = $$value;
          $$settled = false;
        },
        zoom: ($$value) => {
          zoom = $$value;
          $$settled = false;
        },
        cropSize: ($$value) => {
          cropSize = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
            <div>${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        min: 1,
        max: 10,
        step: 0.01,
        values: rangeSlider
      },
      {
        values: ($$value) => {
          rangeSlider = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
            <div>${escape(pixels?.width)} x ${escape(pixels?.height)}</div>
            <div class="${"font-semibold text-blue-700"}">${escape(data.photoApproval?.fullName)}</div>
            <div>${escape(data.photoApproval?.genderName)}</div>
            <div class="${"flex gap-4 justify-center"}"><button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4.5 12.75l6 6 9-13.5"}"></path></svg>
                    Onayla
                </button>

                <form action="${"?/decline"}"><button class="${"bg-red-700 hover:bg-red-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}"></path></svg>
                    Sil
                </button></form></div></div></div></div>

<form class="${"hidden"}" action="${"?/approve"}"><button type="${"submit"}"${add_attribute("this", submitButton, 0)}></button></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
