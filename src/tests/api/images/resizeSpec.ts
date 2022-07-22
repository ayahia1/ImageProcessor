import resize from '../../../api/images/resize';
import { promises as fs } from 'fs';
import path from 'path';
import fileExists from 'file-exists';
const thumbnail_file = path.join(
  __dirname,
  '../../../api/images/imagesFolder',
  'thumbnail/fjordx700x200.jpg'
);

describe('Checking if the Image resizing function works', (): void => {
  beforeAll(async (): Promise<void> => {
    if (await fileExists(thumbnail_file)) {
      await fs.unlink(thumbnail_file);
    }
  });

  it('Checking that the resizing function works', async (): Promise<void> => {
    await resize('fjord', 700, 200, thumbnail_file);
    expect(await fileExists(thumbnail_file)).toBe(true);
  });

  afterAll(async (): Promise<void> => {
    await fs.unlink(thumbnail_file);
  });
});
