// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Overview",
    },
    {
      type: "category",
      label: "How To",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "HowTo",
        },
      ],
    },
    {
      type: "category",
      label: "Concepts",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "Concepts",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "Tutorials",
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "Reference",
        },
      ],
    },
  ],
};

module.exports = sidebars;
