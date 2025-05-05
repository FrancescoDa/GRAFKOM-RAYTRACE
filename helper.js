function createRay(origin, direction) {
  return { origin, direction };
}

function intersectSphere(ray, sphere) {
  const L = vec3.create();
  vec3.subtract(L, sphere.center, ray.origin);

  const tca = vec3.dot(L, ray.direction);
  const d2 = vec3.dot(L, L) - tca * tca;
  const r2 = sphere.radius * sphere.radius;

  if (d2 > r2) return null;

  const thc = Math.sqrt(r2 - d2);
  const t0 = tca - thc;
  const t1 = tca + thc;

  if (t1 < 0) return null;

  const t = t0 < 0 ? t1 : t0;
  const hitPoint = vec3.create();
  vec3.scaleAndAdd(hitPoint, ray.origin, ray.direction, t);
  return hitPoint;
}
