export interface CodeGetPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  checkUpdates(): void;
  acceptInstall(options: { value: boolean }): void;
  rejectionInstall(options: { value: boolean }): void;

}
