import execa from "execa";
import crypto from "crypto";
import QUnit from "qunit";

let { module, test } = QUnit;

let str = crypto.randomBytes(10).toString("hex");

module("for current branch", function () {
  test("deploy netlify site", async function (assert) {
    let { stdout } = await execa(
      "../bin/run.js",
      [`test-${str}`, ".test-class"],
      {
        env: { DEBUG: true },
        cwd: "tests",
      }
    );
    let regex = new RegExp(`Site not found: test-${str}-.*`);
    assert.true(regex.test(stdout), `${regex.toString()}\n${stdout}`);

    regex = new RegExp(`Site created: http://test-${str}-.*.netlify.app`);
    assert.true(regex.test(stdout), `${regex.toString()}\n${stdout}`);

    regex = new RegExp(`Deployed: http://test-${str}-.*.netlify.app`);
    assert.true(regex.test(stdout), `${regex.toString()}\n${stdout}`);
  });

  test("delete netlify site", async function (assert) {
    let { stdout } = await execa("../bin/run.js", [`test-${str}`, "-d"], {
      env: { DEBUG: true },
      cwd: "tests",
    });
    let regex = new RegExp(`Site deleted: http://test-${str}-.*.netlify.app`);
    assert.true(regex.test(stdout), `${regex.toString()}\n${stdout}`);
  });
});
