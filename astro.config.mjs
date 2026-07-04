// @ts-check
import { defineConfig } from "astro/config";

/**
 * @typedef {{
 *   type: string;
 *   tagName?: string;
 *   value?: string;
 *   children?: HastNode[];
 * }} HastNode
 */

function unwrapStandaloneImages() {
  /**
   * @param {HastNode} tree
   */
  return (tree) => {
    unwrapImageParagraphs(tree);
  };
}

/**
 * @param {HastNode} node
 */
function unwrapImageParagraphs(node) {
  if (!Array.isArray(node.children)) {
    return;
  }

  node.children = node.children.map((child) => {
    const image = getStandaloneParagraphImage(child);

    if (image) {
      return image;
    }

    unwrapImageParagraphs(child);
    return child;
  });
}

/**
 * @param {HastNode} node
 * @returns {HastNode | undefined}
 */
function getStandaloneParagraphImage(node) {
  if (node.type !== "element" || node.tagName !== "p") {
    return undefined;
  }

  if (!Array.isArray(node.children)) {
    return undefined;
  }

  const contentChildren = node.children.filter((child) => {
    return child.type !== "text" || child.value?.trim() !== "";
  });

  const [image] = contentChildren;

  if (contentChildren.length !== 1 || image.type !== "element" || image.tagName !== "img") {
    return undefined;
  }

  return image;
}

// https://astro.build/config
export default defineConfig({
  site: "https://feelsufo.com",
  markdown: {
    rehypePlugins: [unwrapStandaloneImages],
  },
});
