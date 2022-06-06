"use strict";
function erro(erro, codigo) {
    throw { error: erro, code: codigo };
}
erro("opa deu erro", 123);
