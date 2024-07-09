import {
  ESLMixinElement,
  ESLPanelGroup,
  ESLPanel,
  ESLTab,
  ESLTabs,
  ESLTrigger,
  onDocumentReady } from '@exadel/esl';
import Prism from 'prismjs';

ESLPanelGroup.register();
ESLPanel.register();
ESLTab.register();
ESLTabs.register();
ESLTrigger.register();

class ScrollToTopOnShow extends ESLMixinElement {
  static is = 'scroll-to-top-on-show';

  connectedCallback() {
    super.connectedCallback();
    this.$$on({event: 'esl:show', target: ($that) => $that.$host}, this.onShown);
  }

  onShown() {
    window.scrollTo(0, 0);
  }
}
ScrollToTopOnShow.register();

onDocumentReady(() => {
  Prism.highlightAll();
});
