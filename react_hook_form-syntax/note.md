# REACT HOOK FORM

##### Simple form validation with React Hook Form.

## Installation

```properties
    npm install react-hook-form
```

## React Hook Form's API overview

## useForm:

- **useForm** is a custom hook for managing forms with ease.

- It takes one object as **optional** argument. The following example demonstrates all of its properties along with their default values.

#### - Generic props:

- **mode:** Validation strategy before submitting behaviour.
- **reValidateMode:** Validation strategy after submitting behaviour.
- **defaultValues:** Default values for the form.
- **values:** Reactive values to update the form values.
- **resetOptions:** Option to reset form state update while updating new form values.
- **criteriaMode:** Display all validation errors or one at a time.
- **shouldFocusError:** Enable or disable built-in focus management.
- **delayError** Delay error from appearing instantly.
- **shouldUseNativeValidation:** Use browser built-in form constraint API.
- **shouldUnregister:** Enable and disable input unregister after unmount.

#### Schema validation props:

- **resolver:** Integrates with your preferred schema validation library.
- **context:** A context object to supply for your schema validation.

#### PROPS

- **mode:** onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'

- This option allows we to **configure** the **validation strategy** **before a user submits the form**.

- The validation occurs during the **onSubmit** event, which is triggered by invoking **the handleSubmit function**.

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">onSubmit</td>
    <td style="color: red">string</td>
    <td>Validation is triggered on the submit event, and inputs attach onChange event listeners to re-validate themselves.</td>
  </tr>
  <tr>
    <td style="color: green">onBlur</td>
    <td style="color: red">string</td>
    <td>Validation is triggered on the blur event.</td>
  </tr>
  <tr>
    <td style="color: green">onChange</td>
    <td style="color: red">string</td>
    <td>Validation is triggered on the changeevent for each input, leading to multiple re-renders. Warning: this often comes with a significant impact on performance.</td>
  </tr>
  <tr>
    <td style="color: green">onTouched</td>
    <td style="color: red">string</td>
    <td>Validation is initially triggered on the first blur event. After that, it is triggered on every change event.
    <p><span style="color: yellow">Note:</span> when using with Controller, make sure to wire up onBlur with the render prop.</p>
    </td>
  </tr>
  <tr>
    <td style="color: green">all</td>
    <td style="color: red">string</td>
    <td>Validation is triggered on both blur and change events.</td>
  </tr>
</table>

## Register

- **Register uncontrolled/controlled inputs**

  ```ts
  </> register: (name: string, RegisterOptions?) => ({
    onChange,
    onBlur,
    name,
    ref,
  });
  ```

- This method allows we to **register an input** or **select element** and **apply validation rules** to React Hook Form.
- **Validation rules** are all based on the HTML standard and also allow for **custom validation methods**.

- **By invoking** the register function and supplying an input's name, we will receive the following methods:

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">onChange</td>
    <td style="color: red">ChangeHandler</td>
    <td>onChange prop to subscribe the input change event.</td>
  </tr>
  <tr>
    <td style="color: green">onBlur</td>
    <td style="color: red">ChangeHandler</td>
    <td>onBlur prop to subscribe the input blur event.</td>
  </tr>
  <tr>
    <td style="color: green">ref</td>
    <td style="color: red">React.Ref **any**</td>
    <td>Input reference for hook form to register</td>
  </tr>
  <tr>
    <td style="color: green">name</td>
    <td style="color: red">string</td>
    <td>Input's name being registered.</td>
  </tr>

</table>

## formState:

- This object contains information about the entire form state.
- It helps we to keep on track with **the user's interaction** with our form application.

- Here are some important properties within formState:

  - **dirty:** true if any field in the form has been changed.

  - **isSubmitted:** true if the form has been submitted.

  - **touched:** An object containing information about fields that have been touched (blurred). It can be used to **display errors after the user has interacted with a field**.

  - **isSubmitting:** true if the form is currently in the process of submitting.

  - **submitCount:** The number of times the form has been submitted. Often used to **determine how many times the form has been submitted**.

  - **isValid:** **true** if all fields in the form are valid **(no errors)**.

  - **errors:** An object containing information about errors for each field. It can be used to display error messages to the user.

  - **isDirty:** true if any field in the form has been changed.

- To use **formState**, we need to register it by adding formState to the list of properties returned from the useForm function:

  ```js
  const { register, handleSubmit, formState } = useForm();
  ```

- Then, we can access information within **formState** to manage the state of the form and its fields. For example:

  ```js
  if (formState.isSubmitted) {
    // The form has been submitted
  }

  if (formState.dirtyFields.email) {
    // The email field has been changed
  }

  if (formState.errors.email) {
    // There is an error in the email field
  }
  ```

## Watch

### Subscribe to input changes:

```js
</> watch: (names?: string | string[] | (data, options) => void) => unknown
```

- This method will **watch specified inputs** and **return our values**. - It is useful to **render input value** and for **determining** what to render by condition.

### PROPS:

<table>
  <tr>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">string </td>
    <td style="color: red">Watch input value by name (similar to lodash get function)
    </td>
  </tr>
  <tr>
    <td style="color: green">string[]</td>
    <td style="color: red">Watch multiple inputs</td>
  </tr>
  <tr>
    <td style="color: green">undefined</td>
    <td style="color: red">Watch all inputs</td>
  </tr>
  <tr>
    <td style="color: green">(data: unknown, { name: string, type: string }) => void</td>
    <td style="color: red">Watch all inputs and invoke a callback</td>
  </tr>
</table>

### Return:

<table>
  <tr>
    <th>Example</th>
    <th>Return</th>
  </tr>
  <tr>
    <td style="color: green">watch('inputName')</td>
    <td style="color: red">unknown</td>
  </tr>
  <tr>
    <td style="color: green">watch(['inputName1'])</td>
    <td style="color: red">unknown[]</td>
  </tr>
  <tr>
    <td style="color: green">watch()</td>
    <td style="color: red">{[key:string]: unknown}</td>
  </tr>
  <tr>
    <td style="color: green">watch((data, { name, type }) => console.log(data, name, type))</td>
    <td style="color: red">{unsubscribe: () => void }</td>
  </tr>
</table>

### RULES:

- When **defaultValue is not defined**, the first render of watch will **return undefined** because it **is called before register**.

- It's recommend to **provide defaultValues** at useForm to avoid this behaviour, but we can **set the inline defaultValue** as the **second argument.**

- When both **defaultValue and defaultValues** are supplied, defaultValue will be returned.

- This API **will trigger re-render** at the **root** of our app or form, consider using a callback or **the useWatch** api if we are experiencing performance issues.

- **watch** result is optimised for render **phase** instead of useEffect's deps, to detect value update we may want to **use an external custom hook** for value comparison.

## HandleSubmit:

```js
((data: Object, e?: Event) => Promise<void>, (errors: Object, e?: Event) => void) => Promise<void>
```

- This function will **receive the form data** if form validation is successful.

### Props:

<table>
  <tr>
    <th>Name </th>
    <th>Type </th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">SubmitHandler</td>
    <td style="color: red">(data: Object, e?: Event) => Promise<void></td>
    <td >A successful callback.</td>
  </tr>
  <tr>
    <td style="color: green">SubmitErrorHandler</td>
    <td style="color: red">(errors: Object, e?: Event) => Promise<void></td>
    <td>An error callback.</td>
  </tr>
</table>

### RULES:

- We can **easily submit** form asynchronously with handleSubmit.

  ```js
  // It can be invoked remotely as well
  handleSubmit(onSubmit)();

  // You can pass an async function for asynchronous validation.
  handleSubmit(async (data) => await fetchAPI(data));
  ```

- **disabled inputs** will **appear as undefined** values in form values.
- If we want to **prevent users** from updating an input and wish to retain the form value, we can use **readOnly** or **disable the entire \<fieldset />**.

- **handleSubmit function** will **not swallow errors** that occurred inside your onSubmit callback, so we recommend you to **try and catch inside async request** and **handle those errors** gracefully for your customers.

  - Exam:

  ```js
  const onSubmit = async () => {
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };
  <form onSubmit={handleSubmit(onSubmit)} />;
  ```

## Reset: Reset form state and values

```js
  reset: <T>(values?: T | ResetAction<T>, options?: Record<string, boolean>) => void
```

#### - Reset the entire form state, fields reference, and subscriptions. There are optional arguments and will allow partial form state reset

#### PROPS:

Important: this keep option doesn't reflect form input values but only dirty fields form state.

<!-- Important: formState dirtyFields will need to be subscribed. -->

.

<table>
  <tr>
    <th>Name </th>
    <th>Type </th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">values</td>
    <td style="color: red">object</td>
    <td>An optional object to reset form values, and it's recommended to provide the entire defaultValues when supplied.</td>
  </tr>
  <tr>
    <td style="color: green">keepErrors</td>
    <td style="color: red">boolean</td>
    <td>All errors will remain. This will not guarantee with further user actions.</td>
  </tr>
  <tr>
    <td style="color: green">keepDirty</td>
    <td style="color: red">boolean</td>
    <td>DirtyFields form state will remain, and isDirty will temporarily remain as the current state until further user's action.</td>
  </tr>
  <tr>
    <td style="color: green">keepDirtyValues</td>
    <td style="color: red">boolean</td>
    <td>DirtyFields and isDirty will remained, and only none dirty fields will be updated to the latest rest value. Check out the example.</td>
  </tr>
  <tr>
    <td style="color: green">keepValues</td>
    <td style="color: red">boolean</td>
    <td>Form input values will be unchanged.</td>
  </tr>
  <tr>
    <td style="color: green">keepDefaultValues</td>
    <td style="color: red">boolean</td>
    <td>Keep the same defaultValues which are initialised via useForm.
      <p> <i>isDirty will be checked again:</i> it is set to be the result of the comparison of any new values provided against the original defaultValues.</p>
      <p><i>dirtyFields will be updated again</i>
         if values are provided: it is set to be result of the comparison between the new values provided against the originaldefaultValues.
      </p>
    </td>
  </tr>
  <tr>
    <td style="color: green">keepIsSubmitted</td>
    <td style="color: red">boolean</td>
    <td>isSubmitted state will be unchanged.</td>
  </tr>
  <tr>
    <td style="color: green">keepTouched</td>
    <td style="color: red">boolean</td>
    <td>isTouched state will be unchanged.</td>
  </tr>
  <tr>
    <td style="color: green">keepIsSubmitted</td>
    <td style="color: red">boolean</td>
    <td>isSubmitted state will be unchanged.</td>
  </tr>
  <tr>
    <td style="color: green">keepIsValid</td>
    <td style="color: red">boolean</td>
    <td>isValid will temporarily persist as the current state until additional user actions.</td>
  </tr>
  <tr>
    <td style="color: green">keepSubmitCount</td>
    <td style="color: red">boolean</td>
    <td>submitCount state will be unchanged.</td>
  </tr>
</table>

### RULES:

- For controlled components we will **need to pass defaultValues** to **useForm** in order to **reset** the Controller components' value.

- When **defaultValues is not supplied** to reset API, then HTML native reset API will be invoked to restore the form.

- **Avoid calling reset before useForm's useEffect is invoked**, this is because useForm's subscription needs to be ready before reset can send a signal to flush form state update.

- It's **recommended to reset inside useEffect after submission**.

  ```js
  useEffect(() => {
    reset({
      data: "test",
    });
  }, [isSubmitSuccessful]);
  ```

## ResetField

**Reset field state and value**

### PROPS:

- **After invoke this function:**

- **isValid** form state will be reevaluated.

- **isDirty** form state will be reevaluated.

- ResetField has the **ability to retain field state**.
- Here are the options you may want to use:

When this value is provided:

field will be updated with the supplied value.

field's defaultValue will be updated to this value.

<table>
  <tr>
    <th>Name </th>
    <th>Type </th>
    <th>Description</th>
  </tr>
  <tr>
    <td style="color: green">name</td>
    <td style="color: red">string	</td>
    <td>registered field name.</td>
  </tr>
  <tr>
    <td style="color: green">[keepError]</td>
    <td style="color: red">boolean</td>
    <td>When set to true, field error will be retained.</td>
  </tr>

  <tr>
    <td style="color: green">[keepDirty]</td>
    <td style="color: red">boolean</td>
    <td>When set to true, dirtyFields will be retained.</td>
  </tr>
  <tr>
    <td style="color: green">[keepTouched]</td>
    <td style="color: red">boolean</td>
    <td>When set to true, touchedFields state will be unchanged.</td>
  </tr>
  <tr>
    <td style="color: green">defaultValue</td>
    <td style="color: red">unknown</td>
    <td>When this value is not provided, field will be revert back to it's defaultValue.
    </br>
    When this value is provided:
    <div>- field will be updated with the supplied value.</div>
    <div>- field's defaultValue will be updated to this value.</div>
    </td>
  </tr>
</table>

### Rules

- **name need to match registered field name.**

  ```js
  register("test");
  resetField("test"); // ✅ register input and resetField works
  resetField("non-existent-name"); // ❌ failed by input not found
  ```

## setError:

- Manually set an input error

  ```js
  setError:(name: string, error: FieldError, { shouldFocus?: boolean }) => void
  ```

  <table>
    <tr>
      <th>Name </th>
      <th>Type </th>
      <th>Description</th>
    </tr>
    <tr>
      <td style="color: green">name</td>
      <td style="color: red">string	</td>
      <td>input's name.</td>
    </tr>
    <tr>
      <td style="color: green">error</td>
      <td style="color: red">{type: string, message?: string, types: MultipleFieldErrors}</td>
      <td>Set an error with its type and message.</td>
    </tr>
    <tr>
      <td style="color: green">config </td>
      <td style="color: red">{ shouldFocus?: boolean }</td>
      <td>Should focus the input during setting an error. 
      </br>This only works when the input's reference is registered, it will not work for custom register as well.</td>
    </tr>
  </table>

## Rules

- This method will **not persist the associated input error** if the input passes register's associated rules.

  ```js
  register('registerInput', { minLength: 4 }});
  setError('registerInput', { type: 'custom', message: 'custom message' });
  // validation will pass as long as minLength requirement pass
  ```

- An error that **is not associated with an input field** will be persisted until cleared with clearErrors. This behaviour is only applicable for built-in validation at field level.

  ```js
  setError("notRegisteredInput", { type: "custom", message: "custom message" });
  // clearErrors() need to invoked manually to remove that custom error
  ```

- We can set a **server or global error** with **root** as the key. This type of error will not persist with each submission.

  ```js
  setError("root.serverError", {
    type: "400",
  });
  setError("root.random", {
    type: "random",
  });
  ```

- Can be useful in the handleSubmit method when **we want to give error feedback to a user after async validation**. (ex: API returns validation errors)

- **shouldFocus doesn't work** when an input has been disabled.

- This method will force set **isValid formState to false**, however, it's important to aware isValid will always be derived by the validation result from your input registration rules or schema result.

- There are certain keyword which need to avoid before conflicting with type check. They are type, types

## clearErrors

```js
  clearErrors: (name?: string | string[]) => void
```

**This function can manually clear errors in the form.**

### Props

undefined: reset all errors

<table>
    <tr>
      <th>Type </th>
      <th>Description </th>
      <th>Example</th>
    </tr>
    <tr>
      <td style="color: green">undefined</td>
      <td style="color: red">Remove all errors.	</td>
      <td>clearErrors()</td>
    </tr>
    <tr>
      <td style="color: green">string</td>
      <td style="color: red">Remove single error.</td>
      <td>clearErrors("yourDetails.firstName")</td>
    </tr>
    <tr>
      <td style="color: green"> string[]</td>
      <td style="color: red">Remove multiple errors.</td>
      <td>clearErrors(["yourDetails.lastName"]) </td>
    </tr>
  </table>

- **undefined:** reset all errors
- **string:** reset the error on a single field or by key name.

  ```js
    register('test.firstName', { required: true });
    register('test.lastName', { required: true });
    clearErrors('test'); // will clear both errors from test.firstName and test.lastName
    clearErrors('test.firstName'); // for clear single input error
    string[]: reset errors on the given fields
  ```

### RULES:

- This will **not affect the validation rules** attached to each inputs.

- This method **doesn't affect validation rules** or isValid formState.

### setValue

<p style="color: #ec5990">Update field value</p>

```js
    setValue: (name: string, value: unknown, config?: Object) => void
```

- This function allows ưe to dynamically **set the value of a registered field** and have **the options to validate and update the form state**.

- At the same time, it **tries to avoid unnecessary rerender**.

### RULES:

- Only the following conditions will trigger a re-render:

  - When an error is **triggered or corrected** by a value update

  - When setValue cause state update, such as dirty and touched.

- It's recommended to **target the field's name** rather than make the second argument a nested object.

  ```js
  setValue("yourDetails.firstName", "value"); // ✅ performant
  setValue("yourDetails", { firstName: "value" }); // less performant

  register("nestedValue", { value: { test: "data" } }); // register a nested value input
  setValue("nestedValue.test", "updatedData"); // ❌ failed to find the relevant field
  setValue("nestedValue", { test: "updatedData" }); // ✅ setValue find input and update
  ```

- It's **recommended to register** the input's name before invoking setValue. To update the entire Field Array, make sure the **useFieldArray** hook is being executed first.

- <span style="color: yellow"> Important</span>: use replace from
  **useFieldArray** instead, update entire field array with setValue
  **will be removed in the next major version.**

## setFocus

**Manually set an input focus**

```js
  setFocus:(name: string, options: SetFocusOptions) => void
```

**This method will allow users to programmatically focus on input. Make sure input's ref is registered into the hook form.**

### Props

<table>
<tr> 
  <th>Name</th>
  <th>Type</th>
  <th>Description</th>
</tr>
  <tr>
    <td>name</td>
    <td>string</td>
    <td>A input field name to focus</td>
  </tr>
  <tr>
    <td>[shouldSelect]</td>
    <td>boolean</td>
    <td>Whether to select the input content on focus.</td>
  </tr>
</table>

```js
const { setFocus } = useForm();

setFocus("name", { shouldSelect: true });
```

### RULES:

- This API will **invoke focus method** from the **ref**, so it's important to provide ref during register.

- Avoid **calling setFocus right after reset** as all **input references will be removed by reset API**.

- Exam:

```js
    import * as React from "react";
    import { useForm } from "./src";

    export default function App() {
      const { register, handleSubmit, setFocus } = useForm();
      const onSubmit = (data) => console.log(data);
      renderCount++;

      React.useEffect(() => {
        setFocus("firstName");
      }, [setFocus]);

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} placeholder="First Name" />
          <input type="submit" />
        </form>
      );
```

## getValues

#### Get form values

**getValues**:

```properties
(payload?: string | string[]) => Object;
```

- An optimized helper for **reading form values**.

- The **difference** between **watch and getValues** is that **getValues will not trigger re-renders or subscribe to input changes**.

<table>
<tr> 
  <th>Props</th>
  <th>Description</th>
</tr>
  <tr>
    <td>undefined</td>
    <td>Returns the entire form values.</td>
  </tr>
  <tr>
    <td>string</td>
    <td>Gets the value at path of the form values.</td>
  </tr>
  <tr>
    <td>array</td>
    <td>Returns an array of the value at path of the form values.</td>
  </tr>
</table>

## Rules

- Disabled inputs will be returned as undefined.
  If we want to **prevent users from updating the input** and still retain the field value, we can use **readOnly or disable** the entire \<fieldset />.

## Trigger

**Trigger validation across the form**

```properties
trigger: (name?: string | string[]) => Promise<boolean>
```

- Manually **triggers form or input validation**.

- This method is also useful when we have dependant validation (**input validation depends on another input's value**).

### Props:

 <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td style="color: green">name</td>
      <td style="color: red">undefined</td>
      <td>Triggers validation on all fields.</td>
      <td>trigger()</td>
    </tr>
    <tr>
      <td style="color: green"></td>
      <td style="color: red">string</td>
      <td>Triggers validation on a specific field value by name trigger</td>
      <td>("yourDetails.firstName")</td>
    </tr>
    <tr>
      <td style="color: green"></td>
      <td style="color: red">string[]</td>
      <td>Triggers validation on multiple fields by name.</td>
      <td>trigger(["yourDetails.lastName"])</td>
    </tr>
    <tr>
      <td style="color: green">shouldFocus	boolean	</td>
      <td style="color: red">boolean</td>
      <td>Should focus the input during setting an error. This only works when the input's reference is registered, it will not work for custom register as well.</td>
      <td>trigger('name', { shouldFocus: true })</td>
    </tr>

  </table>

### Rules

- Isolate render optimisation only applicable for targeting a single field name with string as payload
- When supplied with array and undefined to trigger will re-render the entire formState.

### Control

- **Take control of the Form**

  ```properties
  control: Object
  ```

  **This object contains methods for registering components into React Hook Form.**

#### Rules

- <span style="color:yellow">Important: </span>do not access any of the properties inside this object directly. It's for internal usage only.

- Examp:

  ```js
  import { useForm, Controller } from "react-hook-form";

  function App() {
    const { control } = useForm();

    return (
      <Controller
        render={({ field }) => <input {...field} />}
        name="firstName"
        control={control}
        defaultValue=""
      />
    );
  }
  ```

## Controller

- **Wrapper component for controlled inputs**

  ```properties
  Controller: Component
  ```

- React Hook Form **embraces uncontrolled components(ủng hộ sử dụng thành phần không kiểm soát)** and native inputs, however it's hard to avoid working with external controlled component such as React-Select, AntD and MUI.
- **This wrapper component will make it easier for you to work with them**.
