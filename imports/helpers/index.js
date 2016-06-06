/* eslint-disable */

export function issueContract(contract) {
  // REQUIRED: @origin, @destination, @travelMode
  const directionRequest = {
    origin: contract.pickup,
    destination: contract.dropoff,
    travelMode: google.maps.TravelMode.DRIVING,
  };
  const directionsService = new google.maps.DirectionsService();

  directionsService.route(directionRequest, (result, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      // console.log('status ok', result);
      return result;
    } else {
      // console.log('status NOT ok', status);
      return status;
    }
  });
}
