function attachEventsListeners() {
  const inputElement = document.getElementById("inputDistance");
  const unitFromElement = document.getElementById("inputUnits");
  const outputToElement = document.getElementById("outputDistance");
  const unitToElement = document.getElementById("outputUnits");
  const button = document.getElementById("convert");

  const distanceConvertedFromMeters = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  button.addEventListener("click", onClick);

  function onClick() {
    const convetFrom = unitFromElement.value;
    const convertTo = unitToElement.value;

    const valueToMeters =
      inputElement.value * distanceConvertedFromMeters[convetFrom];
    const convertedValue =
      valueToMeters / distanceConvertedFromMeters[convertTo];
    outputToElement.value = convertedValue;
  }
}
