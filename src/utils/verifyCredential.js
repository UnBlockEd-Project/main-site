import { ld } from '@transmute/vc.js';

const vcjs = ld;

const verifyCredential = ({ credential, options }) => {
  return vcjs.verifyCredential({
    credential,
    suite: options.suite,
    documentLoader: options.documentLoader,
  });
};

export { verifyCredential };
