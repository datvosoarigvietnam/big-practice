# REACT HOOK FORM

##### Simple form validation with React Hook Form.

## Installation

```properties
    npm install react-hook-form
```

## React Hook Form's API overview

### useForm:

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
    <td style="color: red">Watch input value by name (similar to lodash get function)</td>
  
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
