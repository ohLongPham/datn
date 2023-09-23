import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PacketModuleBase } from "./base/packet.module.base";
import { PacketService } from "./packet.service";
import { PacketResolver } from "./packet.resolver";

@Module({
  imports: [PacketModuleBase, forwardRef(() => AuthModule)],
  providers: [PacketService, PacketResolver],
  exports: [PacketService],
})
export class PacketModule {}
