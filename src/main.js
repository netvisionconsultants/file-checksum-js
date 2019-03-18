import Sha1 from './sha1';

export default function checksum(msg) {
	return new Sha1(true).update(msg)['hex']();
}