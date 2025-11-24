const Logo = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      {...props}
      width={300}
      height={96}
      viewBox="0 0 380 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={87} height={96} fill="url(#pattern0_62_336)" />
      <mask
        id="mask0_62_336"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={95}
        y={18}
        width={285}
        height={38}
      >
        <rect
          x={95}
          y={18}
          width={285}
          height={38}
          fill="url(#pattern1_62_336)"
        />
      </mask>
      <g mask="url(#mask0_62_336)">
        <rect x={95} y={18} width={285} height={38} fill="white" />
      </g>
      <mask
        id="mask1_62_336"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={210}
        y={63}
        width={170}
        height={19}
      >
        <rect
          x={210}
          y={63}
          width={170}
          height={19}
          fill="url(#pattern2_62_336)"
        />
      </mask>
      <g mask="url(#mask1_62_336)">
        <rect x={210} y={63} width={170} height={19} fill="white" />
      </g>
      <mask
        id="mask2_62_336"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={95}
        y={63}
        width={77}
        height={19}
      >
        <rect
          x={95}
          y={63}
          width={77}
          height={19}
          fill="url(#pattern3_62_336)"
        />
      </mask>
      <g mask="url(#mask2_62_336)">
        <rect x={95} y={63} width={77} height={19} fill="white" />
      </g>
      <mask
        id="mask3_62_336"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={180}
        y={63}
        width={12}
        height={19}
      >
        <rect
          x={180}
          y={63}
          width={12}
          height={19}
          fill="url(#pattern4_62_336)"
        />
      </mask>
      <g mask="url(#mask3_62_336)">
        <rect x={180} y={63} width={12} height={19} fill="white" />
      </g>
      <defs>
        <pattern
          id="pattern0_62_336"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_62_336"
            transform="matrix(0.00545369 0 0 0.0049424 0 -0.00165395)"
          />
        </pattern>
        <pattern
          id="pattern1_62_336"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_62_336"
            transform="matrix(0.00165899 0 0 0.0124861 -0.332168 -0.504178)"
          />
        </pattern>
        <pattern
          id="pattern2_62_336"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_62_336"
            transform="matrix(0.002791 0 0 0.0249721 -1.12941 -3.32415)"
          />
        </pattern>
        <pattern
          id="pattern3_62_336"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_62_336"
            transform="matrix(0.00616196 0 0 0.0249721 -1.25974 -3.32415)"
          />
        </pattern>
        <pattern
          id="pattern4_62_336"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_62_336"
            transform="matrix(0.0395392 0 0 0.0249721 -30.75 -3.32415)"
          />
        </pattern>
        <image
          id="image0_62_336"
          width={803}
          height={203}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyMAAADLCAYAAAB9LEy3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwNEZDNEIzNzFBMDExRjBCRDZERkJEMDg0QUFBOUE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwNEZDNEI0NzFBMDExRjBCRDZERkJEMDg0QUFBOUE5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjA0RkM0QjE3MUEwMTFGMEJENkRGQkQwODRBQUE5QTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjA0RkM0QjI3MUEwMTFGMEJENkRGQkQwODRBQUE5QTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6iPrXKAAAozklEQVR42uzdfYyk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"
        />
      </defs>
    </svg>
  );
};

export default Logo;
