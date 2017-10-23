## Conclusion

- Touching on the dependencies, it is worth to mention that I used `moment.js` for date formatting. Having had to handle date formatting in one single place I could have done it without a library but I still think that is a good practice to have a library dealing with this logic, so for purposes of using good practices I ended up using it.

- It is been my first time working with `redux-promise` middleware, and although it is easy to use and the handling of the loading state is very easy, still feels a bit on its very early stage lacking some maturity on docs, implementation... Nice to have tried it though.

- On the testing bit, I enhanced a bit the tests for the reducers and did snapshot tests for the stateless components. I would have done one for the controller component but I had an issue when installing enzyme. I concluded that the issue was that when using `react-scripts` from `react-create-app`, the jest configuration on `package.json` for using a config file for testing frameworks `setupTestFrameworkScriptFile` is ignored, ending up with the error
```
Enzyme Internal Error: Enzyme expects an adapter to be configured, but found none. To
configure an adapter, you should call `Enzyme.configure({ adapter: new Adapter() })`
before using any of Enzyme's top level APIs, where `Adapter` is the adapter
corresponding to the library currently being tested. For example:

          import Adapter from 'enzyme-adapter-react-15';
```
I did not want to [eject](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) from the original app.


*By the way, note that the commands section on the exercice instructions is missing npm install*
