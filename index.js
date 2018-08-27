// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  const a = drivers.filter(function(driver) { return driver.revenue > revenue});
	return a;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const a = drivers.filter(function(driver) { return driver.revenue > revenue});
  const names = a.map(function(b) { return b.name });
	return names;
}

function exactMatch(drivers, {key: value}) {
  const d = drivers.filter(function(driver, key) {return driver[key] === value})
  return d;
}