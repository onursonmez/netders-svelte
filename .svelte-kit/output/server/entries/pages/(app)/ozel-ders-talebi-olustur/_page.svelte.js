import { w as now, x as loop, c as create_ssr_component, e as escape, f as each, j as createEventDispatcher, d as add_attribute, v as validate_component, b as subscribe, n as noop } from "../../../../chunks/index.js";
import "toastify-js";
import { w as writable } from "../../../../chunks/index3.js";
const Student2 = "/_app/immutable/assets/student2-ef62a23a.png";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const RangePips_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".rangeSlider{--pip:var(--range-pip, lightslategray);--pip-text:var(--range-pip-text, var(--pip));--pip-active:var(--range-pip-active, darkslategrey);--pip-active-text:var(--range-pip-active-text, var(--pip-active));--pip-hover:var(--range-pip-hover, darkslategrey);--pip-hover-text:var(--range-pip-hover-text, var(--pip-hover));--pip-in-range:var(--range-pip-in-range, var(--pip-active));--pip-in-range-text:var(--range-pip-in-range-text, var(--pip-active-text))}.rangePips{position:absolute;height:1em;left:0;right:0;bottom:-1em}.rangePips.vertical{height:auto;width:1em;left:100%;right:auto;top:0;bottom:0}.rangePips .pip{height:0.4em;position:absolute;top:0.25em;width:1px;white-space:nowrap}.rangePips.vertical .pip{height:1px;width:0.4em;left:0.25em;top:auto;bottom:auto}.rangePips .pipVal{position:absolute;top:0.4em;transform:translate(-50%, 25%)}.rangePips.vertical .pipVal{position:absolute;top:0;left:0.4em;transform:translate(25%, -50%)}.rangePips .pip{transition:all 0.15s ease}.rangePips .pipVal{transition:all 0.15s ease, font-weight 0s linear}.rangePips .pip{color:lightslategray;color:var(--pip-text);background-color:lightslategray;background-color:var(--pip)}.rangePips .pip.selected{color:darkslategrey;color:var(--pip-active-text);background-color:darkslategrey;background-color:var(--pip-active)}.rangePips.hoverable:not(.disabled) .pip:hover{color:darkslategrey;color:var(--pip-hover-text);background-color:darkslategrey;background-color:var(--pip-hover)}.rangePips .pip.in-range{color:darkslategrey;color:var(--pip-in-range-text);background-color:darkslategrey;background-color:var(--pip-in-range)}.rangePips .pip.selected{height:0.75em}.rangePips.vertical .pip.selected{height:1px;width:0.75em}.rangePips .pip.selected .pipVal{font-weight:bold;top:0.75em}.rangePips.vertical .pip.selected .pipVal{top:0;left:0.75em}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover{transition:none}.rangePips.hoverable:not(.disabled) .pip:not(.selected):hover .pipVal{transition:none;font-weight:bold}",
  map: null
};
const RangePips = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pipStep;
  let pipCount;
  let pipVal;
  let isSelected;
  let inRange;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = true } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i) => v } = $$props;
  let { focus = void 0 } = $$props;
  let { orientationStart = void 0 } = $$props;
  let { percentOf = void 0 } = $$props;
  let { moveHandle = void 0 } = $$props;
  let { fixFloat = void 0 } = $$props;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.orientationStart === void 0 && $$bindings.orientationStart && orientationStart !== void 0)
    $$bindings.orientationStart(orientationStart);
  if ($$props.percentOf === void 0 && $$bindings.percentOf && percentOf !== void 0)
    $$bindings.percentOf(percentOf);
  if ($$props.moveHandle === void 0 && $$bindings.moveHandle && moveHandle !== void 0)
    $$bindings.moveHandle(moveHandle);
  if ($$props.fixFloat === void 0 && $$bindings.fixFloat && fixFloat !== void 0)
    $$bindings.fixFloat(fixFloat);
  $$result.css.add(css$1);
  pipStep = pipstep || ((max - min) / step >= (vertical ? 50 : 100) ? (max - min) / (vertical ? 10 : 20) : 1);
  pipCount = parseInt((max - min) / (step * pipStep), 10);
  pipVal = function(val) {
    return fixFloat(min + val * step * pipStep);
  };
  isSelected = function(val) {
    return values.some((v) => fixFloat(v) === fixFloat(val));
  };
  inRange = function(val) {
    if (range === "min") {
      return values[0] > val;
    } else if (range === "max") {
      return values[0] < val;
    } else if (range) {
      return values[0] < val && values[1] > val;
    }
  };
  return `
<div class="${[
    "rangePips",
    (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + " " + (focus ? "focus" : "")
  ].join(" ").trim()}">${all && first !== false || first ? `<span class="${[
    "pip first",
    (isSelected(min) ? "selected" : "") + " " + (inRange(min) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 0%;"}">${all === "label" || first === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(fixFloat(min), 0, 0))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}

  ${all && rest !== false || rest ? `${each(Array(pipCount + 1), (_, i) => {
    return `${pipVal(i) !== min && pipVal(i) !== max ? `<span class="${[
      "pip",
      (isSelected(pipVal(i)) ? "selected" : "") + " " + (inRange(pipVal(i)) ? "in-range" : "")
    ].join(" ").trim()}" style="${escape(orientationStart, true) + ": " + escape(percentOf(pipVal(i)), true) + "%;"}">${all === "label" || rest === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(pipVal(i), i, percentOf(pipVal(i))))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}
            </span>` : ``}
        </span>` : ``}`;
  })}` : ``}

  ${all && last !== false || last ? `<span class="${[
    "pip last",
    (isSelected(max) ? "selected" : "") + " " + (inRange(max) ? "in-range" : "")
  ].join(" ").trim()}" style="${escape(orientationStart, true) + ": 100%;"}">${all === "label" || last === "label" ? `<span class="${"pipVal"}">${prefix ? `<span class="${"pipVal-prefix"}">${escape(prefix)}</span>` : ``}${escape(formatter(fixFloat(max), pipCount, 100))}${suffix ? `<span class="${"pipVal-suffix"}">${escape(suffix)}</span>` : ``}</span>` : ``}</span>` : ``}</div>`;
});
const RangeSlider_svelte_svelte_type_style_lang = "";
const css = {
  code: '.rangeSlider{--slider:var(--range-slider, #d7dada);--handle-inactive:var(--range-handle-inactive, #99a2a2);--handle:var(--range-handle, #838de7);--handle-focus:var(--range-handle-focus, #4a40d4);--handle-border:var(--range-handle-border, var(--handle));--range-inactive:var(--range-range-inactive, var(--handle-inactive));--range:var(--range-range, var(--handle-focus));--float-inactive:var(--range-float-inactive, var(--handle-inactive));--float:var(--range-float, var(--handle-focus));--float-text:var(--range-float-text, white);position:relative;border-radius:100px;height:0.5em;margin:1em;transition:opacity 0.2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.rangeSlider *{-webkit-user-select:none;-moz-user-select:none;user-select:none}.rangeSlider.pips{margin-bottom:1.8em}.rangeSlider.pip-labels{margin-bottom:2.8em}.rangeSlider.vertical{display:inline-block;border-radius:100px;width:0.5em;min-height:200px}.rangeSlider.vertical.pips{margin-right:1.8em;margin-bottom:1em}.rangeSlider.vertical.pip-labels{margin-right:2.8em;margin-bottom:1em}.rangeSlider .rangeHandle{position:absolute;display:block;height:1.4em;width:1.4em;top:0.25em;bottom:auto;transform:translateY(-50%) translateX(-50%);z-index:2}.rangeSlider.reversed .rangeHandle{transform:translateY(-50%) translateX(50%)}.rangeSlider.vertical .rangeHandle{left:0.25em;top:auto;transform:translateY(50%) translateX(-50%)}.rangeSlider.vertical.reversed .rangeHandle{transform:translateY(-50%) translateX(-50%)}.rangeSlider .rangeNub,.rangeSlider .rangeHandle:before{position:absolute;left:0;top:0;display:block;border-radius:10em;height:100%;width:100%;transition:box-shadow 0.2s ease}.rangeSlider .rangeHandle:before{content:"";left:1px;top:1px;bottom:1px;right:1px;height:auto;width:auto;box-shadow:0 0 0 0px var(--handle-border);opacity:0}.rangeSlider.hoverable:not(.disabled) .rangeHandle:hover:before{box-shadow:0 0 0 8px var(--handle-border);opacity:0.2}.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:before,.rangeSlider.hoverable:not(.disabled) .rangeHandle.press:hover:before{box-shadow:0 0 0 12px var(--handle-border);opacity:0.4}.rangeSlider.range:not(.min):not(.max) .rangeNub{border-radius:10em 10em 10em 1.6em}.rangeSlider.range .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(45deg)}.rangeSlider.range.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(135deg)}.rangeSlider.range.vertical .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(1) .rangeNub{transform:rotate(-45deg)}.rangeSlider.range.vertical.reversed .rangeHandle:nth-of-type(2) .rangeNub{transform:rotate(135deg)}.rangeSlider .rangeFloat{display:block;position:absolute;left:50%;top:-0.5em;transform:translate(-50%, -100%);text-align:center;opacity:0;pointer-events:none;white-space:nowrap;transition:all 0.2s ease;font-size:0.9em;padding:0.2em 0.4em;border-radius:0.2em}.rangeSlider .rangeHandle.active .rangeFloat,.rangeSlider.hoverable .rangeHandle:hover .rangeFloat{opacity:1;top:-0.2em;transform:translate(-50%, -100%)}.rangeSlider .rangeBar{position:absolute;display:block;transition:background 0.2s ease;border-radius:1em;height:0.5em;top:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}.rangeSlider.vertical .rangeBar{width:0.5em;height:auto}.rangeSlider{background-color:#d7dada;background-color:var(--slider)}.rangeSlider .rangeBar{background-color:#99a2a2;background-color:var(--range-inactive)}.rangeSlider.focus .rangeBar{background-color:#838de7;background-color:var(--range)}.rangeSlider .rangeNub{background-color:#99a2a2;background-color:var(--handle-inactive)}.rangeSlider.focus .rangeNub{background-color:#838de7;background-color:var(--handle)}.rangeSlider .rangeHandle.active .rangeNub{background-color:#4a40d4;background-color:var(--handle-focus)}.rangeSlider .rangeFloat{color:white;color:var(--float-text);background-color:#99a2a2;background-color:var(--float-inactive)}.rangeSlider.focus .rangeFloat{background-color:#4a40d4;background-color:var(--float)}.rangeSlider.disabled{opacity:0.5}.rangeSlider.disabled .rangeNub{background-color:#d7dada;background-color:var(--slider)}',
  map: null
};
const RangeSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let percentOf;
  let clampValue;
  let alignValueToStep;
  let orientationStart;
  let orientationEnd;
  let $springPositions, $$unsubscribe_springPositions = noop, $$subscribe_springPositions = () => ($$unsubscribe_springPositions(), $$unsubscribe_springPositions = subscribe(springPositions, ($$value) => $springPositions = $$value), springPositions);
  let { slider = void 0 } = $$props;
  let { range = false } = $$props;
  let { pushy = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { values = [(max + min) / 2] } = $$props;
  let { vertical = false } = $$props;
  let { float = false } = $$props;
  let { reversed = false } = $$props;
  let { hoverable = true } = $$props;
  let { disabled = false } = $$props;
  let { pips = false } = $$props;
  let { pipstep = void 0 } = $$props;
  let { all = void 0 } = $$props;
  let { first = void 0 } = $$props;
  let { last = void 0 } = $$props;
  let { rest = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { prefix = "" } = $$props;
  let { suffix = "" } = $$props;
  let { formatter = (v, i, p) => v } = $$props;
  let { handleFormatter = formatter } = $$props;
  let { precision = 2 } = $$props;
  let { springValues = { stiffness: 0.15, damping: 0.4 } } = $$props;
  const dispatch = createEventDispatcher();
  let valueLength = 0;
  let focus = false;
  let activeHandle = values.length - 1;
  let startValue;
  let previousValue;
  let springPositions;
  const fixFloat = (v) => parseFloat(v.toFixed(precision));
  function trimRange(values2) {
    if (range === "min" || range === "max") {
      return values2.slice(0, 1);
    } else if (range) {
      return values2.slice(0, 2);
    } else {
      return values2;
    }
  }
  function moveHandle(index, value) {
    value = alignValueToStep(value);
    if (typeof index === "undefined") {
      index = activeHandle;
    }
    if (range) {
      if (index === 0 && value > values[1]) {
        if (pushy) {
          values[1] = value;
        } else {
          value = values[1];
        }
      } else if (index === 1 && value < values[0]) {
        if (pushy) {
          values[0] = value;
        } else {
          value = values[0];
        }
      }
    }
    if (values[index] !== value) {
      values[index] = value;
    }
    if (previousValue !== value) {
      eChange();
      previousValue = value;
    }
    return value;
  }
  function rangeStart(values2) {
    if (range === "min") {
      return 0;
    } else {
      return values2[0];
    }
  }
  function rangeEnd(values2) {
    if (range === "max") {
      return 0;
    } else if (range === "min") {
      return 100 - values2[0];
    } else {
      return 100 - values2[1];
    }
  }
  function eChange() {
    !disabled && dispatch("change", {
      activeHandle,
      startValue,
      previousValue: typeof previousValue === "undefined" ? startValue : previousValue,
      value: values[activeHandle],
      values: values.map((v) => alignValueToStep(v))
    });
  }
  if ($$props.slider === void 0 && $$bindings.slider && slider !== void 0)
    $$bindings.slider(slider);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.pushy === void 0 && $$bindings.pushy && pushy !== void 0)
    $$bindings.pushy(pushy);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.values === void 0 && $$bindings.values && values !== void 0)
    $$bindings.values(values);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.float === void 0 && $$bindings.float && float !== void 0)
    $$bindings.float(float);
  if ($$props.reversed === void 0 && $$bindings.reversed && reversed !== void 0)
    $$bindings.reversed(reversed);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.pips === void 0 && $$bindings.pips && pips !== void 0)
    $$bindings.pips(pips);
  if ($$props.pipstep === void 0 && $$bindings.pipstep && pipstep !== void 0)
    $$bindings.pipstep(pipstep);
  if ($$props.all === void 0 && $$bindings.all && all !== void 0)
    $$bindings.all(all);
  if ($$props.first === void 0 && $$bindings.first && first !== void 0)
    $$bindings.first(first);
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.rest === void 0 && $$bindings.rest && rest !== void 0)
    $$bindings.rest(rest);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
    $$bindings.suffix(suffix);
  if ($$props.formatter === void 0 && $$bindings.formatter && formatter !== void 0)
    $$bindings.formatter(formatter);
  if ($$props.handleFormatter === void 0 && $$bindings.handleFormatter && handleFormatter !== void 0)
    $$bindings.handleFormatter(handleFormatter);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  if ($$props.springValues === void 0 && $$bindings.springValues && springValues !== void 0)
    $$bindings.springValues(springValues);
  $$result.css.add(css);
  clampValue = function(val) {
    return val <= min ? min : val >= max ? max : val;
  };
  alignValueToStep = function(val) {
    if (val <= min) {
      return fixFloat(min);
    } else if (val >= max) {
      return fixFloat(max);
    }
    let remainder = (val - min) % step;
    let aligned = val - remainder;
    if (Math.abs(remainder) * 2 >= step) {
      aligned += remainder > 0 ? step : -step;
    }
    aligned = clampValue(aligned);
    return fixFloat(aligned);
  };
  percentOf = function(val) {
    let perc = (val - min) / (max - min) * 100;
    if (isNaN(perc) || perc <= 0) {
      return 0;
    } else if (perc >= 100) {
      return 100;
    } else {
      return fixFloat(perc);
    }
  };
  {
    {
      if (!Array.isArray(values)) {
        values = [(max + min) / 2];
        console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)");
      }
      values = trimRange(values.map((v) => alignValueToStep(v)));
      if (valueLength !== values.length) {
        $$subscribe_springPositions(springPositions = spring(values.map((v) => percentOf(v)), springValues));
      } else {
        springPositions.set(values.map((v) => percentOf(v)));
      }
      valueLength = values.length;
    }
  }
  orientationStart = vertical ? reversed ? "top" : "bottom" : reversed ? "right" : "left";
  orientationEnd = vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
  $$unsubscribe_springPositions();
  return `<div${add_attribute("id", id, 0)} class="${[
    "rangeSlider",
    (range ? "range" : "") + " " + (disabled ? "disabled" : "") + " " + (hoverable ? "hoverable" : "") + " " + (vertical ? "vertical" : "") + " " + (reversed ? "reversed" : "") + "  " + (range === "min" ? "min" : "") + " " + (range === "max" ? "max" : "") + " " + (pips ? "pips" : "") + " " + (all === "label" || first === "label" || last === "label" || rest === "label" ? "pip-labels" : "")
  ].join(" ").trim()}"${add_attribute("this", slider, 0)}>${each(values, (value, index) => {
    return `<span role="${"slider"}" class="${[
      "rangeHandle",
      " "
    ].join(" ").trim()}"${add_attribute("data-handle", index, 0)} style="${escape(orientationStart, true) + ": " + escape($springPositions[index], true) + "%; z-index: " + escape(activeHandle === index ? 3 : 2, true) + ";"}"${add_attribute("aria-valuemin", range === true && index === 1 ? values[0] : min, 0)}${add_attribute("aria-valuemax", range === true && index === 0 ? values[1] : max, 0)}${add_attribute("aria-valuenow", value, 0)} aria-valuetext="${escape(prefix, true) + escape(handleFormatter(value, index, percentOf(value)), true) + escape(suffix, true)}"${add_attribute("aria-orientation", vertical ? "vertical" : "horizontal", 0)}${add_attribute("aria-disabled", disabled, 0)} ${disabled ? "disabled" : ""}${add_attribute("tabindex", disabled ? -1 : 0, 0)}><span class="${"rangeNub"}"></span>
      ${float ? `<span class="${"rangeFloat"}">${prefix ? `<span class="${"rangeFloat-prefix"}">${escape(prefix)}</span>` : ``}${escape(handleFormatter(value, index, percentOf(value)))}${suffix ? `<span class="${"rangeFloat-suffix"}">${escape(suffix)}</span>` : ``}
        </span>` : ``}
    </span>`;
  })}
  ${range ? `<span class="${"rangeBar"}" style="${escape(orientationStart, true) + ": " + escape(rangeStart($springPositions), true) + "%; " + escape(orientationEnd, true) + ": " + escape(rangeEnd($springPositions), true) + "%;"}"></span>` : ``}
  ${pips ? `${validate_component(RangePips, "RangePips").$$render(
    $$result,
    {
      values,
      min,
      max,
      step,
      range,
      vertical,
      reversed,
      orientationStart,
      hoverable,
      disabled,
      all,
      first,
      last,
      rest,
      pipstep,
      prefix,
      suffix,
      formatter,
      focus,
      percentOf,
      moveHandle,
      fixFloat
    },
    {},
    {}
  )}` : ``}</div>

`;
});
const requestModel = {
  keywordLesson: "",
  keywordLocation: "",
  outsideTurkey: false,
  levelId: "",
  countryId: "",
  countyId: "",
  placeOwn: false,
  placeTeacher: false,
  placeRemote: false,
  budget: [50, 200],
  budgetSecret: false,
  genderId: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  responseTypeId: "",
  isAgreementChecked: false
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lessons = { items: [], total: 0 };
  let locations = { items: [], total: 0 };
  let requestData = requestModel;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        locations = { items: [], total: 0 };
      }
    }
    {
      {
        lessons = { items: [], total: 0 };
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-juqmny_START -->${$$result.title = `<title>\xD6zel Ders Talebi Olu\u015Ftur</title>`, ""}<!-- HEAD_svelte-juqmny_END -->`, ""}

<div class="${["max-w-2xl w-full mx-auto mt-8 mb-4", "hidden"].join(" ").trim()}"><h2 class="${"sr-only"}">Ad\u0131mlar</h2>
	<div><div class="${"overflow-hidden rounded-full bg-white"}"><div class="${[
      "h-2 rounded-full bg-blue-500 " + escape("", true),
      "w-0"
    ].join(" ").trim()}"></div></div>

		<ol class="${"mt-4 grid grid-cols-5 text-sm font-medium"}"><li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Ders</span></li>

			<li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Yer</span></li>

			<li class="${[
      "flex items-center justify-center",
      requestData.placeIds && requestData.genderId && (requestData.budget || requestData.budgetSecret) ? "text-blue-600" : ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Kriter</span></li>

			<li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>

				<span class="${"hidden md:block ml-1"}">Bilgiler</span></li>

			<li class="${["flex items-center justify-center", ""].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}"></path></svg>

				<span class="${"hidden md:block ml-1"}">Bitti</span></li></ol></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-4", ""].join(" ").trim()}"><div class="${"p-6"}"><div class="${"grid md:grid-cols-4"}"><div class="${"hidden md:block"}"><img${add_attribute("src", Student2, 0)} alt="${""}"></div>
			<div class="${"md:col-span-3"}"><h5 class="${"font-semibold text-2xl"}">Ders talebi olu\u015Ftur</h5>
				<p>Almak istedi\u011Fin \xF6zel dersle ilgili do\u011Fru \xF6\u011Fretmeni bulam\u0131yor veya buldu\u011Fun \xF6\u011Fretmenlerden emin olam\u0131yorsan, \xF6zel ders talebi b\u0131rakarak kriterlerine en uygun \xF6\u011Fretmenlerin sana ula\u015Fmas\u0131n\u0131 sa\u011Flayabilirsin.</p>
				<p class="${"font-semibold mt-4"}">Ders talebi b\u0131rakman\u0131n avantajlar\u0131</p>
				<ul class="${"list-none"}"><li>\u2B50 \xDCcretsizdir. Ders talebi b\u0131rakmak i\xE7in herhangi bir \xFCcret \xF6demezsin.</li>
					<li>\u2B50 Kolayd\u0131r. Sen \xF6\u011Fretmen aramazs\u0131n, \xF6\u011Fretmen sana ula\u015F\u0131r.</li>
					<li>\u2B50 Se\xE7me hakk\u0131n olur. Yaln\u0131zca be\u011Fendi\u011Fin \xF6\u011Fretmenle devam edersin.</li>
					<li>\u2B50 H\u0131zl\u0131d\u0131r. Yakla\u015F\u0131k 1-2 saat i\xE7erisinde arad\u0131\u011F\u0131n \xF6\u011Fretmeni bulursun.</li>
					<li>\u2B50 G\xFCvenlidir. Yaln\u0131zca kriterlerini tam olarak kar\u015F\u0131layan, onayl\u0131 \xF6\u011Fretmenler sana ula\u015Fabilir.</li></ul>


				<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v12m6-6H6"}"></path></svg>
					Ders Talebi Olu\u015Ftur
				</button></div></div></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg mb-4"}">Almak istedi\u011Fin \xF6zel ders nedir?</div>
		<label for="${"default-search"}" class="${"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"}">Arama</label>
		<div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
			<input autocomplete="${"off"}" type="${"text"}" id="${"default-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0"}" placeholder="${"Almak istedi\u011Fin \xF6zel dersin ad\u0131n\u0131 yazar m\u0131s\u0131n?"}"${add_attribute("value", requestData.keywordLesson, 0)}></div>

		<p class="${"text-xs mt-4 text-gray-400"}">Yukar\u0131daki alana almak istedi\u011Fin \xF6zel dersin ad\u0131n\u0131 yazmal\u0131s\u0131n.</p></div>

	${requestData.keywordLesson.length > 0 ? `<div class="${"grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6"}"><div class="${"col-span-2 lg:col-span-3 text-center"}">&quot;<span class="${"font-semibold"}">${escape(requestData.keywordLesson)}</span>&quot; aramas\u0131na uygun <span class="${"font-semibold"}">${escape(lessons.total)}</span> sonu\xE7 bulundu.
		</div>
		${lessons.items.length > 0 ? `${each(lessons.items, (lesson) => {
      return `<div class="${"p-4 border rounded-md hover:border-blue-700 cursor-pointer"}"><div class="${"text-sm text-gray-500"}">${escape(lesson.subjectTitle)}</div>
				<div>${escape(lesson.title)}</div>
			</div>`;
    })}` : ``}</div>

	<div class="${"mb-4 text-sm text-center"}" id="${"moreLessonArea"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			Daha fazla ders
		</button></div>` : ``}</div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg mb-4"}">Nerede ya\u015F\u0131yorsun?</div>
		<label for="${"location-search"}" class="${"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"}">Arama</label>
		<div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
			<input autocomplete="${"off"}" type="${"text"}" id="${"location-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0"}" placeholder="${"Hangi " + escape("\u015Fehirdesin", true) + "?"}"${add_attribute("value", requestData.keywordLocation, 0)}></div>

		<p class="${"text-xs mt-3 text-gray-400"}">Yukar\u0131daki alana bulundu\u011Fun ${escape("\u015Fehrin")} ismini yazmal\u0131s\u0131n.</p>

		<p class="${"mt-4 text-sm"}"><label><input type="${"checkbox"}" class="${"border-gray-500 mr-1 rounded-sm ring-0 outline-none"}"${add_attribute("checked", requestData.outsideTurkey, 1)}> T\xFCrkiye&#39;de ya\u015Fam\u0131yorum
			</label></p></div>

	${locations.items.length > 0 ? `<div class="${"grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6"}"><div class="${"col-span-2 lg:col-span-3 text-center"}">&quot;<span class="${"font-semibold"}">${escape(requestData.keywordLocation)}</span>&quot; arama sonucuna uygun <span class="${"font-semibold"}">${escape(locations.total)}</span> sonu\xE7 bulundu.
		</div>
		${each(locations.items, (location) => {
      return `<div class="${"p-4 border rounded-md hover:border-blue-700 cursor-pointer"}"><div class="${"text-sm text-gray-400"}">${escape("\u015Eehir")}</div>
				<div>${escape(location.title)}</div>
			</div>`;
    })}</div>
	<div class="${"mb-4 text-sm text-center"}" id="${"moreLocationArea"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			Daha fazla lokasyon
		</button></div>` : ``}</div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Nerede ders almak istersin?</div>
		<p class="${"text-xs text-gray-400"}">Birden fazla se\xE7im yapabilirsin.</p>
		<div class="${"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2"}"><div><input type="${"checkbox"}" id="${"location-own"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeOwn, 0)}>
				<label for="${"location-own"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Kendi evimde</div></label></div>

			<div><input type="${"checkbox"}" id="${"location-teacher"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeTeacher, 0)}>
				<label for="${"location-teacher"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">\xD6\u011Fretmen evinde</div></label></div>

			<div><input type="${"checkbox"}" id="${"location-online"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeRemote, 0)}>
				<label for="${"location-online"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Uzaktan, webcam ile</div></label></div></div>

		<div class="${"mt-4 text-gray-400"}">-\u2022-</div>

		<div class="${"font-semibold text-lg mt-2"}">Kimden ders almak istersin?</div>
		<p class="${"text-xs text-gray-400"}">Yaln\u0131zca bir se\xE7im yapabilirsin.</p>
		<div class="${"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2"}"><div><input type="${"radio"}" id="${"teacher-gender-male"}" value="${"1"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-male"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Erkek \xD6\u011Fretmen</div></label></div>

			<div><input type="${"radio"}" id="${"teacher-gender-female"}" value="${"2"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-female"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Kad\u0131n \xD6\u011Fretmen</div></label></div>

			<div><input type="${"radio"}" id="${"teacher-gender-none"}" value="${"3"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-none"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Farketmez</div></label></div></div>

		<div class="${"mt-4 text-gray-400"}">-\u2022-</div>

		<div class="${"font-semibold text-lg mt-2"}">Bir ders i\xE7in b\xFCt\xE7en nedir?</div>
		<p class="${"text-xs text-gray-400"}">B\xFCt\xE7enin aral\u0131\u011F\u0131n\u0131 se\xE7 veya \xF6\u011Fretmene belirt.</p>
		${`${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        min: 50,
        max: 700,
        pips: "true",
        step: 50,
        values: requestData.budget
      },
      {
        values: ($$value) => {
          requestData.budget = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			<div class="${"font-semibold"}">${escape(requestData.budget[0])} - ${escape(requestData.budget[1])} \u20BA</div>`}

		<label class="${"mt-2 block text-sm"}"><input type="${"checkbox"}" class="${"border-gray-500 mr-1 rounded-sm ring-0 outline-none"}"${add_attribute("checked", requestData.budgetSecret, 1)}> B\xFCt\xE7emi \xF6\u011Fretmene belirtmek istiyorum
		</label>

		<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
			Devam et
		</button></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Son olarak seni biraz tan\u0131yabilir miyim?</div>

		<div class="${"grid grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Ad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.firstName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.lastName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">E-posta adresin</span>
				<input type="${"email"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.email, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
				<input type="${"number"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.phone, 0)}></div>
			<div class="${"col-span-2"}"><span class="${"text-sm mb-1 block text-gray-500"}">Almak istedi\u011Fin \xF6zel ders ile ilgili mevcut seviyeni, beklentilerini, derse ne zaman ba\u015Flamak istedi\u011Fini, okula gidiyorsan ka\xE7\u0131nc\u0131 s\u0131n\u0131fa gitti\u011Fini yazabilir misin? Bunlar\u0131n d\u0131\u015F\u0131nda ne kadar detay verirsen o kadar do\u011Fru \xF6\u011Fretmenle e\u015Fle\u015Firsin.</span>
				<textarea minlength="${"30"}" rows="${"5"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea>
				<span class="${"text-xs text-gray-400"}">Minimum 30 karakter yazmal\u0131s\u0131n.</span></div></div>

		<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
			G\xF6nder
		</button></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">\u0130\u015Fte bu kadar! \xD6zel ders talebin ba\u015Far\u0131yla al\u0131nd\u0131.</div>
		<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-64 h-64 mx-auto animate-pulse text-green-500"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
		<p>Talebin edit\xF6rlerimiz taraf\u0131ndan incelenme a\u015Famas\u0131ndad\u0131r.</p>
		<p class="${"text-gray-400 text-sm"}">En k\u0131sa s\xFCre i\xE7erisinde bizden alacaks\u0131n \u{1F603}</p>

		<a href="${"/"}" class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>

			Ana Sayfa
		</a></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
