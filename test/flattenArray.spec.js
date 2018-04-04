var chai = require('chai');
var assert = require('chai').assert;
var expect = require('chai').expect;
var describe = require('mocha').describe;
import {flattenArray} from '../src/flattenArray';

describe('Array', function() {
  describe('#flattenArray()', function() {
    it('should return a single, flat array', function() {
      assert.deepEqual(flattenArray([1,2,[4],3]), [1,2,4,3])
    })
    it('should return a single, flat array from 3 nested arrays', function() {
      assert.deepEqual(flattenArray([1,[2,[3,[4]]]]), [1,2,3,4])
    })
    it('should return a single, flat array from an empty array', function() {
      assert.deepEqual(flattenArray([]), [])
    })
    it('should return a single, flat array from 4 nested arrays', function() {
      assert.deepEqual(flattenArray([[[[1]]]]), [1])
    })
  })
})
