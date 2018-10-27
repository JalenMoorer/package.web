import React from 'react';

const PackageJSONForm = () => {

  return (
    <div>
      <p>Initialize a brand new package json file</p>
      <form>
        <label for="my-app">App Name: </label>
        <input id="my-app" type="text" name="app" placeholder="my-app" />

        <label for="version">Version: </label>
        <input id="version" type="text" name="version" placeholder="0.0.0" />

        <label for="private">Make Package Private></label>
        <select name="private">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

      </form>
    </div>
  )
}

export default PackageJSONForm;
